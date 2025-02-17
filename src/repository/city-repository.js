const { City } = require("../models/index");

class CityRepository {
  // 1 create a new City
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }

  //   2 delete a city based on id
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }

  //   3 fetch city
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }

  //   4 update city
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
