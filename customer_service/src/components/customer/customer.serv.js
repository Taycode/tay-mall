const bcrypt = require('bcrypt');
const CustomerRepository = require('../../database/repository/customer.repo');

const CustomerService = {
  async createCustomer(data) {
    const createdCustomer = await CustomerRepository.create({
      name: data.name,
      username: data.username,
      password: await bcrypt.hash(data.password, 10),
    });
    return createdCustomer;
  },
};

module.exports = Object.freeze(CustomerService);
