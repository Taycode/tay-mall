const { Router } = require('express');
const PaymentController = require('../components/payment/payment.ctrl');

const router = Router();

router.get('/', PaymentController.home);

module.exports = Object.freeze(router);
