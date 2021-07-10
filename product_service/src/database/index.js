const mongoose = require('mongoose');

const Database = {
  async connect() {
    try {
      await mongoose.connect('mongodb://tay-mall-db:27017/customer', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('Customer Service -> Database Connected');
    } catch (error) {
      console.log('Customer Service -> Error connecting to DB');
      throw error;
    }
  },
};

module.exports = Object.freeze(Database);