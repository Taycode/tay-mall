const { Router } = require('express');
const CustomerController = require('../components/customer/customer.ctrl');

const router = Router();
router.get('/', CustomerController.home);
router.post('/', CustomerController.createCustomer);
module.exports = Object.freeze(router);
