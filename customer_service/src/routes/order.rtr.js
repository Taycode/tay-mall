const { Router } = require('express');
const OrderController = require('../components/order/order.ctrl');
const OrderValidator = require('../validators/order.val');

const router = Router();
router.post('/', OrderValidator.makeOrder, OrderController.makeOrder);

module.exports = Object.freeze(router);
