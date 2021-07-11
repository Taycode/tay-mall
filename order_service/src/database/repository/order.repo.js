const BaseRepository = require('./base');
const Order = require('../model/order');

class OrderRepository extends BaseRepository {
  constructor() {
    super(Order);
  }
}

module.exports = new OrderRepository();
