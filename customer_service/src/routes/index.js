const customerRoute = require('./customer.rtr');
const ProductRouter = require('./product.rtr');

module.exports = (app) => {
  app.use('', customerRoute);
  app.use('/product', ProductRouter);
  return app;
};
