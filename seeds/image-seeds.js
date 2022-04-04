const { Image } = require('../models');

const imagedata = [

];


const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;