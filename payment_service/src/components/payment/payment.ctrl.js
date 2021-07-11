const RabbitMQ = require('../../workers/rabbitmq');

const PaymentCtrl = {
  async listenToPayment(req, res) {
    const payload = req.body;
    const createdTransaction = {
      customerId: payload.customerId,
      orderId: payload.orderId,
      productId: payload.productId,
      amount: payload.amount,
    };
    await RabbitMQ.sendToQueue('transactions', createdTransaction);
    return res.status(201).json(createdTransaction);
  },
};

module.exports = Object.freeze(PaymentCtrl);
