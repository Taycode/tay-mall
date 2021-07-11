const customerRoute = require('./customer.rtr');
const ProductRoute = require('./product.rtr');
const OrderRoute = require('./order.rtr');

module.exports = (app) => {
  app.use('', customerRoute);
  app.use('/product', ProductRoute);
  app.use('/order', OrderRoute);
  return app;
};
