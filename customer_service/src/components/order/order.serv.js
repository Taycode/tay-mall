const axios = require('axios').create({
  baseURL: 'http://order-service:3000',
});

const productAxios = require('axios').create({
  baseURL: 'http://product-service:3000',
});

const OrderService = {
  async createOrder(payload) {
    const response = await axios.post('/', {
      customerId: payload.customerId,
      productId: payload.productId,
      amount: payload.amount,
      address: payload.address,
      phoneNumber: payload.phoneNumber,
      email: payload.email,
    });
    return response.data;
  },
  async makeOrder(payload) {
    const getProduct = (await productAxios('/get', {
      params: {
        productId: payload.productId,
      },
    }));
    const { price } = getProduct.data;
    const createOrderData = {
      ...payload,
      amount: price,
    };
    const createdOrder = await this.createOrder(createOrderData);
    return createdOrder;
  },
};

module.exports = Object.freeze(OrderService);
