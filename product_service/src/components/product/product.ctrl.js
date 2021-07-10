const ProductCtrl = {
  async home(req, res) {
    return res.send('App is Live');
  },
};
module.exports = Object.freeze(ProductCtrl);
