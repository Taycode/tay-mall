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
};
module.exports = Object.freeze(ProductCtrl);
