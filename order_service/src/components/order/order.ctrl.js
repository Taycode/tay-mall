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

      // eslint-disable-next-line no-underscore-dangle
      createdOrder.orderId = createdOrder._id;

      return res.status(201).json(createdOrder);
    } catch (error) {
      return res.status(400).json({ message: 'An Error Occurred' });
    }
  },
  async update(req, res) {
    try {
      const { orderId } = req.query;
      const { status } = req.body;
      if (!orderId) {
        return res.status(400).json({ message: 'orderId is required in query params' });
      }
      const order = await OrderRepository.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not Found' });
      }
      order.status = status;
      order.save();
      return res.status(200).json({ message: 'Order updated' });
    } catch (error) {
      return res.status(400).json({ message: 'An Error Occurred' });
    }
  },
};
module.exports = Object.freeze(OrderCtrl);
