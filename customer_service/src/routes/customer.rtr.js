const { Router } = require('express');
const CustomerController = require('../components/customer/customer.ctrl');

const router = Router();
router.get('/', CustomerController.home);
module.exports = Object.freeze(router);
