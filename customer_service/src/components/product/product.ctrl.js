const ProductService = require('./product.serv');

const ProductController = {
  async getProductList(req, res) {
    try {
      const products = await ProductService.getProductList();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ message: 'An Error Occurred' });
    }
  },
};

module.exports = Object.freeze(ProductController);
