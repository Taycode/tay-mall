const OrderRepository = require('../../database/repository/order.repo');
const RabbitMQ = require('../../workers/rabbitmq');

const OrderCtrl = {
  async create(req, res) {
    try {
      const payload = req.body;
      const createdOrder = await OrderRepository.create({
        customerId: payload.customerId,
        productId: payload.productId,
        amount: payload.amount,
        address: payload.address,
        phoneNumber: payload.phoneNumber,
        email: payload.email,
      });

      // Queue Transaction for Payment Service
      await RabbitMQ.sendToQueue('transactions', {
        customerId: createdOrder.customerId,
        productId: createdOrder.productId,
        // eslint-disable-next-line no-underscore-dangle
        orderId: createdOrder._id,
        amount: createdOrder.amount,
      });
      return res.status(201).json(createdOrder);
    } catch (error) {
      return res.status(400).json({ message: 'An Error Occurred' });
    }
  },
};
module.exports = Object.freeze(OrderCtrl);
