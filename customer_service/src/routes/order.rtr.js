const { Router } = require('express');
const OrderController = require('../components/order/order.ctrl');

const router = Router();
router.post('/', OrderController.makeOrder);

module.exports = Object.freeze(router);
