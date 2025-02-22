const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

// City Routes
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

// Flight Routes
router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);

// Airport Routes
router.post("/airports", AirportController.create);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airports/:id", AirportController.update);
router.delete("/airports/:id", AirportController.destroy);

module.exports = router;
