const Validator = require('validatorjs');

const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

const OrderValidator = {
  makeOrder(req, res, next) {
    const rule = {
      customerId: 'required|string',
      productId: 'required|string',
      amount: 'required|number',
      address: 'required|string',
      phoneNumber: 'required|string',
      email: 'required|email',
    };
    validator(req.body, rule, {}, (err, status) => {
      if (!status) {
        res.status(400).json({
          ...err,
        });
      } else {
        next();
      }
    });
  },
};

module.exports = Object.freeze(OrderValidator);
