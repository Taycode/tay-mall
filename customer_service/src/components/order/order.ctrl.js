const OrderService = require('./order.serv');

const OrderController = {
  async makeOrder(req, res) {
    try {
      const payload = req.body;
      payload.customerId = 'myName';
      const order = await OrderService.makeOrder({
        customerId: payload.customerId,
        productId: payload.productId,
        amount: payload.amount,
        address: payload.address,
        phoneNumber: payload.phoneNumber,
        email: payload.email,
      });
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json({ message: 'An Error Occurred' });
    }
  },
};

module.exports = Object.freeze(OrderController);
