const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    console.log(req.query);
    const response = await flightService.getAllFlightData(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched All the Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
