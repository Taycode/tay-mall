const { Router } = require('express');
const PaymentController = require('../components/payment/payment.ctrl');

const router = Router();

router.post('/listen', PaymentController.listenToPayment);

module.exports = Object.freeze(router);
