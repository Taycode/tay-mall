const bcrypt = require('bcrypt');
const CustomerRepository = require('../../database/repository/customer.repo');

const CustomerService = {
  async createCustomer(data) {
    const customer = CustomerRepository.findOne({
      username: data.username,
    });
    if (customer) {
      throw new Error('User Exists');
    }
    const createdCustomer = await CustomerRepository.create({
      name: data.name,
      username: data.username,
      password: await bcrypt.hash(data.password, 10),
    });
    return createdCustomer;
  },
};

module.exports = Object.freeze(CustomerService);
