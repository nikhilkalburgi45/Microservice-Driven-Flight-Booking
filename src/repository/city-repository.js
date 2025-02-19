const { Op } = require("sequelize");

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

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.like]: `${filter.name}%`, // Case-insensitive workaround for SQL
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong on the repo layer", error);
      throw { error };
    }
  }

  //   4 update city
  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong on the repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
