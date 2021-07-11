const { model, Schema } = require('mongoose');

const CustomerSchema = new Schema({
  name: { type: String },
  password: { type: String },
  username: { type: String },
});

module.exports = model('customers', CustomerSchema);
