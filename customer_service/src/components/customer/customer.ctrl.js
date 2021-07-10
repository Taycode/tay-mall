const CustomerCtrl = {
  async home(req, res) {
    return res.send('Customer Service is Live');
  },
};
module.exports = Object.freeze(CustomerCtrl);
