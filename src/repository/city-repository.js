const { City } = require("../models/index");

class CityRepository {
  // 1 create a new City
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  //   2 delete a city based on id
  async deleteCity(cityId)  {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
