const BaseRepository = require('./base');
const Customer = require('../model/customer');

class CustomerRepository extends BaseRepository {
  constructor() {
    super(Customer);
  }
}

module.exports = new CustomerRepository();
