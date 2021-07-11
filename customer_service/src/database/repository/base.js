class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  create(payload = {}) {
    return this.Model.create(payload);
  }

  findOne(condition = {}) {
    return this.Model.findOne({ ...condition });
  }

  findById(id) {
    return this.Model.findById(id)
      .catch(() => null);
  }

  all(condition = {}) {
    return this.Model.find(condition);
  }

  createMany(data = []) {
    return this.Model.insertMany(data);
  }

  updateOne(condition = {}, data = {}) {
    return this.Model.updateOne(condition, data);
  }
}

module.exports = BaseRepository;
