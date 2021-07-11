const { model, Schema } = require('mongoose');

const TransactionSchema = new Schema({
  customerId: { type: String, required: true },
  orderId: { type: String, required: true },
  productId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

module.exports = model('transactions', TransactionSchema);
