const { Flights } = require("../models/index");

class FlightRepository {
  // 1 create a new flight
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
