class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong on crud service");
    }
  }

  async destroy(modelId) {
    try {
      const result = await this.repository.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went on crud service");
    }
  }

  async get(modelId) {
    try {
      const result = await this.repository.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Something went on crud service");
    }
  }

  async getAll() {
    try {
      const result = await this.repository.findAll();
      return result;
    } catch (error) {
      console.log("Something went on crud service");
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.repository.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went on crud service");
    }
  }
}

module.exports = CrudService;
