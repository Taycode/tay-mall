const RabbitMQ = require('./rabbitmq');
const TransactionRepository = require('../database/repository/transaction.repo');
const Database = require('../database');
const OrderService = require('../services/order.serv');

module.exports = () => {
  RabbitMQ.consumeTransactions(async (x) => {
    const payload = JSON.parse(x.content.toString());
    const db = await Database.connect();
    await TransactionRepository.create(payload);
    await OrderService.updateOrderToSuccessful(payload.orderId);
    await db.disconnect();
  });
};
