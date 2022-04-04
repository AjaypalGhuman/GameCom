const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
    {
        username: 'msprague5',
        email: 'larnout5@imdb.com',
        password: 'password123'
    },
    {
        username: 'mpergens6',
        email: 'hnapleton6@feedburner.com',
        password: 'password123'
    },
    {
        username: 'jmacarthur9',
        email: 'bsteen9@epa.gov',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
