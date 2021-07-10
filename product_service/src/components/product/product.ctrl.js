const ProductRepository = require('../../database/repository/product.repo');

const ProductCtrl = {
  async fetch(req, res) {
    try {
      const products = await ProductRepository.all();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ message: 'An error Occurred' });
    }
  },
  async create(req, res) {
    try {
      const { name, description, price } = req.body;
      const createdProduct = await ProductRepository.create({
        name,
        description,
        price,
      });
      return res.status(201).json(createdProduct);
    } catch (error) {
      return res.status(400).json({ message: 'An error Occurred' });
    }
  },
  async fetchOne(req, res) {
    try {
      const { productId } = req.query;

      // Return Error if no Product Id is in query params
      if (!productId) {
        return res.status(400).json({ message: 'productId is required as query' });
      }

      // Fetch Product
      const product = await ProductRepository.findById(productId);

      // Return 404 Product not found
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: 'An error Occurred' });
    }
  },
};
module.exports = Object.freeze(ProductCtrl);
