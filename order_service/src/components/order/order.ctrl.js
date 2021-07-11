const OrderRepository = require('../../database/repository/order.repo');

const OrderCtrl = {
  async home(req, res) {
    return res.send('Order Service is Live');
  },
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
      return res.status(201).json(createdOrder);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'An Error Occured' });
    }
  },
};
module.exports = Object.freeze(OrderCtrl);
