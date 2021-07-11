const customerService = require('./customer.serv');

const CustomerCtrl = {
  async home(req, res) {
    return res.send('Customer Service is Live');
  },
  async createCustomer(req, res) {
    const payload = req.body;
    const createdCustomer = await customerService.createCustomer({
      name: payload.name,
      username: payload.name,
      password: payload.password,
    });
    return res.status(201).json(createdCustomer);
  },
};
module.exports = Object.freeze(CustomerCtrl);
