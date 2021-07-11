const axios = require('axios').create({
  baseURL: 'http://order-service:3000',
});

const OrderService = {
  async updateOrderToSuccessful(orderId) {
    await axios.put('/', { status: 'successful' }, {
      params: {
        orderId,
      },
    });
  },
};

module.exports = Object.freeze(OrderService);
