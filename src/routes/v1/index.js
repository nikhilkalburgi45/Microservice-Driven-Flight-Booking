const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

// POST :- /api/v1/city
router.post("/city", CityController.create);
// DELETE :- /api/v1/city/:id
router.delete("/city/:id", CityController.destroy);
// GET :- /api/v1/city/:id
router.get("/city/:id", CityController.get);
// PATCH :- /api/v1/city/:id
router.patch("/city/:id", CityController.update);

module.exports = router;
