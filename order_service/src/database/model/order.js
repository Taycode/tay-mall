const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  amount: { type: Number, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'cancelled', 'successful'],
    default: 'pending',
  },
  paid: { type: String, default: false },
  transactionReference: { type: String },
});

module.exports = model('orders', OrderSchema);
