const mongoose = require('mongoose');

const Database = {
  async connect() {
    try {
      const db = await mongoose.connect('mongodb://tay-mall-db:27017/product', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('Payment Service -> Database Connected');
      return db;
    } catch (error) {
      console.log('Payment Service -> Error connecting to DB');
      throw error;
    }
  },
};

module.exports = Object.freeze(Database);
