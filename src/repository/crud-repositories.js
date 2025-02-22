class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      console.error("Error in CrudRepository create:", error);
      throw error;
    }
  }

  async destroy(modelId) {
    try {
      const result = await this.model.destroy({
        // FIXED: Changed des() to destroy()
        where: { id: modelId },
      });

      if (result === 0) {
        throw new Error(`No record found to delete with id: ${modelId}`);
      }

      return true;
    } catch (error) {
      console.error("Error in CrudRepository destroy:", error);
      throw error;
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      if (!result) {
        throw new Error(`No record found with id: ${modelId}`);
      }
      return result;
    } catch (error) {
      console.error("Error in CrudRepository get:", error);
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error("Error in CrudRepository getAll:", error);
      throw error;
    }
  }

  async update(modelId, data) {
    try {
      const [updatedRows, updatedRecords] = await this.model.update(data, {
        where: { id: modelId },
        returning: true, // Ensures updated records are returned
      });

      if (updatedRows === 0) {
        throw new Error(`No record found to update with id: ${modelId}`);
      }

      return updatedRecords;
    } catch (error) {
      console.error("Error in CrudRepository update:", error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
