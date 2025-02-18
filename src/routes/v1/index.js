const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

// POST :- /api/v1/city
router.post("/city", CityController.create);

module.exports = router;
