const { Router } = require('express');
const OrderController = require('../components/order/order.ctrl');

const router = Router();

router.post('/', OrderController.create);

module.exports = Object.freeze(router);
