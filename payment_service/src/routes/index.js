const PaymentRoute = require('./payment.rtr');

module.exports = (app) => {
  app.use('', PaymentRoute);
};
