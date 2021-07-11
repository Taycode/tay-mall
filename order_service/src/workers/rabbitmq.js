const rabbitmq = require('amqplib');

const RabbitMQ = {
  async start(queue) {
    const connection = await rabbitmq.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    return channel;
  },
  async sendToQueue(queue, message) {
    const channel = await this.start(queue);
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  },
};

module.exports = Object.freeze(RabbitMQ);
