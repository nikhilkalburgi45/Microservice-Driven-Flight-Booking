const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const response = await airplaneService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a new airplane",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot create a new airplane",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airplaneService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the airplane",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch the airplane",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airplaneService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all airplanes",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch airplanes",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airplaneService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated the airplane",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot update the airplane",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    await airplaneService.destroy(req.params.id);
    return res.status(200).json({
      data: {},
      success: true,
      message: "Successfully deleted the airplane",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot delete the airplane",
      err: error,
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
