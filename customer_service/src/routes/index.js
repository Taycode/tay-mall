const customerRoute = require('./customer');

module.exports = (app) => {
  app.use('', customerRoute);
  return app;
};
