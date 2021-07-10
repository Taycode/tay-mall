const customerRoute = require('./customer.rtr');

module.exports = (app) => {
  app.use('', customerRoute);
  return app;
};
