const CrudRepository = require("./crud-repositories");
const { Airport } = require("../models/index");
class AirportRepository extends CrudRepository {
  constructor(model) {
    super(Airport);
  }
}

module.exports = AirportRepository;
