const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice && data.maxPrice) {
      filter.price = {
        [Op.between]: [data.minPrice, data.maxPrice],
      };
    } else if (data.minPrice) {
      filter.price = { [Op.gte]: data.minPrice };
    } else if (data.maxPrice) {
      filter.price = { [Op.lte]: data.maxPrice };
    }

    return filter;
  }

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

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
