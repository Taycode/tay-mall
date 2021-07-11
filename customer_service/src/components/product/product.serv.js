const axios = require('axios').create({
  baseURL: 'http://product-service:3000',
});

const ProductService = {
  async getProductList() {
    const products = await axios.get('/');
    return products.data;
  },
};

module.exports = Object.freeze(ProductService);
