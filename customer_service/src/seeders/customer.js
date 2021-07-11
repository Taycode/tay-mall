const CustomerService = require('../components/customer/customer.serv');
const Database = require('../database');

const customer = {
  name: 'Abdulmateen Tairu',
  username: 'username',
  password: 'password',
};

const CustomerSeeder = async () => {
  const db = await Database.connect();
  await CustomerService.createCustomer(customer);
  await db.disconnect();
  return null;
};

CustomerSeeder().then(() => console.log('Customer Seeded'));
