const rabbitmq = require('amqplib');

const RabbitMQ = {
  async start(queue) {
    const connection = await rabbitmq.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    return channel;
  },
  consumeQueue(queue, callback) {
    this.start(queue)
      .then((channel) => {
        channel.consume(queue, (msg) => {
          callback(msg);
          channel.ack(msg);
        }, { noAck: false });
      });
  },
  consumeTransactions(callback) {
    this.consumeQueue('transactions', callback);
  },
};

module.exports = Object.freeze(RabbitMQ);
