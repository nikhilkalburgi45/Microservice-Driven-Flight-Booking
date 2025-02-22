// const { Airplane } = require("../models/index");

// class AirplaneRepository {
//   async getAirplane(id) {
//     try {
//       const airplane = await Airplane.findByPk(id);
//       return airplane;
//     } catch (error) {
//       console.log("Something went wrong on the repo layer");
//       throw { error };
//     }
//   }
// }

// module.exports = AirplaneRepository;

const CrudRepository = require("./crud-repositories");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
