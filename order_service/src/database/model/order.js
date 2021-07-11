const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  amount: { type: Number, required: true },
  address: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  delivered: { type: Boolean, default: false },
  paid: { type: String, default: false },
  transactionReference: { type: String, required: true },
});

module.exports = model('orders', OrderSchema);
