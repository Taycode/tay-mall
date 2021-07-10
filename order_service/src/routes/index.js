const OrderRoute = require('./order.rtr');

module.exports = (app) => {
  app.use('', OrderRoute);
};
