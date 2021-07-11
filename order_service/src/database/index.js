const mongoose = require('mongoose');

const Database = {
  async connect() {
    try {
      const db = await mongoose.connect('mongodb://tay-mall-db:27017/order', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('Order Service -> Database Connected');
      return db;
    } catch (error) {
      console.log('Order Service -> Error connecting to DB');
      throw error;
    }
  },
};

module.exports = Object.freeze(Database);
