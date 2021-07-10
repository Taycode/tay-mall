const ProductRoute = require('./product.rtr');

module.exports = (app) => {
  app.use('', ProductRoute);
  return app;
};
