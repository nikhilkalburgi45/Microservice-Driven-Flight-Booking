class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (error) {
      console.log("Error in CrudService create:", error);
      throw error;
    }
  }

  async destroy(modelId) {
    try {
      const result = await this.repository.destroy(modelId); // FIXED
      if (!result) {
        throw new Error(`No record found with id: ${modelId}`);
      }
      return true;
    } catch (error) {
      console.log("Error in CrudService destroy:", error);
      throw error;
    }
  }

  async get(modelId) {
    try {
      const result = await this.repository.get(modelId); // FIXED
      if (!result) {
        throw new Error(`No record found with id: ${modelId}`);
      }
      return result;
    } catch (error) {
      console.log("Error in CrudService get:", error);
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.repository.getAll(); // FIXED
    } catch (error) {
      console.log("Error in CrudService getAll:", error);
      throw error;
    }
  }

  async update(modelId, data) {
    try {
      const updatedRecord = await this.repository.update(modelId, data); // FIXED
      if (!updatedRecord) {
        throw new Error(`No record found to update with id: ${modelId}`);
      }
      return updatedRecord;
    } catch (error) {
      console.log("Error in CrudService update:", error);
      throw error;
    }
  }
}

module.exports = CrudService;
