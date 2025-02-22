const { AirportService } = require("../services/index");

const airportService = new AirportService();

// Create an airport
const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully created a new airport",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot create a new airport",
    });
  }
};

// Get an airport by ID
const get = async (req, res) => {
  try {
    const response = await airportService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the airport",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot fetch the airport",
    });
  }
};

// Get all airports
const getAll = async (req, res) => {
  try {
    const response = await airportService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched all airports",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot fetch airports",
    });
  }
};

// Update an airport by ID
const update = async (req, res) => {
  try {
    const response = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully updated the airport",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot update the airport",
    });
  }
};

// Delete an airport by ID
const destroy = async (req, res) => {
  try {
    await airportService.destroy(req.params.id);
    return res.status(200).json({
      data: {},
      success: true,
      err: {},
      message: "Successfully deleted the airport",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot delete the airport",
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
};
