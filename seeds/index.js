const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedImages = require('./image-seeds');
const seedHelpfuls = require('./helpful-seeds');
const seedUnhelpfuls = require('./unhelpful-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedImages();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedHelpfuls();
  console.log('--------------');

  await seedUnhelpfuls();
  console.log('--------------');

  process.exit(0);
};

seedAll();