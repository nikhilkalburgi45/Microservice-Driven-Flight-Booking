const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper"); // Fixed function name

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository(); // Creating an object of a class
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be earlier than departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer", error);
      throw { error };
    }
  }
}

module.exports = { FlightService };
