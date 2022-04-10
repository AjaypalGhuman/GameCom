const { Unhelpful } = require('../models');

// seeded data of the posts marked as unhelpful

const unhelpfuldata = [
    {
        user_id: 1,
        post_id: 3
    },
    {
        user_id: 1,
        post_id: 6
    },
    {
        user_id: 2,
        post_id: 4
    },
    {
        user_id: 3,
        post_id: 6
    }
];


const seedUnhelpfuls = () => Unhelpful.bulkCreate(unhelpfuldata);

module.exports = seedUnhelpfuls;