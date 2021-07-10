const { Router } = require('express');
const OrderController = require('../components/order/order.ctrl');

const router = Router()

router.get('/', OrderController.home);

module.exports = Object.freeze(router);
