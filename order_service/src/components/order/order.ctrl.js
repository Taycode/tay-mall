const OrderCtrl = {
  async home(req, res) {
    return res.send('Order Service is Live');
  },
};
module.exports = Object.freeze(OrderCtrl);
