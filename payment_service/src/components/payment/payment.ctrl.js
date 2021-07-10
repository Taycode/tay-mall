const PaymentCtrl = {
    async home(req, res, _next){
        return res.send('Payment Service is live');
    }
}

module.exports = Object.freeze(PaymentCtrl);
