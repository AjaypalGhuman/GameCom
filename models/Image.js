//This is the image model in case we are able to upload images to the DDBB
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        image_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_data: {
            type: DataTypes.BLOB("long"),
            allowNull: false
        },        
        post_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'post',
            key: 'id'
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'image'
    }
);

module.exports = Image;