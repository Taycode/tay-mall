const BaseRepository = require('./base');
const Product = require('../model/product');

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product);
  }
}

module.exports = new ProductRepository();
