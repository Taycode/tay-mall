const RabbitMQ = require('./rabbitmq');
const TransactionRepository = require('../database/repository/transaction.repo');
const Database = require('../database');

module.exports = () => {
  RabbitMQ.consumeTransactions(async (x) => {
    const payload = JSON.parse(x.content.toString());
    const db = await Database.connect();
    await TransactionRepository.create(payload);
    await db.disconnect();
  });
};
