const ProductRepository = require('../database/repository/product.repo');
const Database = require('../database');

const products = [
  {
    name: 'Rice',
    price: 200,
    description: 'Rice for eating',
  },
  {
    name: 'Bread',
    price: 190,
    description: 'Bread for baking',
  },
  {
    name: 'Ring',
    price: 2000,
    description: 'Ring for wedding',
  },
  {
    name: 'Sugar',
    price: 50,
    description: 'Sugar for sweetening',
  },
  {
    name: 'Corn Flakes',
    price: 2000,
    description: 'Corn Flakes Cereal',
  },
  {
    name: 'Brush',
    price: 150,
    description: 'Brush for brushing hair',
  },
];

const ProductSeeder = async () => {
  const db = await Database.connect();
  await ProductRepository.createMany(products);
  await db.disconnect();
  return null;
};

ProductSeeder().then(() => console.log('Products inserted'));
