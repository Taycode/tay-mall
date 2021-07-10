const PaymentCtrl = {
  async home(req, res) {
    return res.send('Payment Service is live');
  },
};

module.exports = Object.freeze(PaymentCtrl);
