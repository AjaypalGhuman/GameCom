const { Image } = require('../models');

// unused image seeds used to render images with posts
const imagedata = [

];


const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;