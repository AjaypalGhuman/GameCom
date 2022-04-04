//Used to indicate if the user finds a post helpful (similar to a like)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Helpful extends Model {}

Helpful.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
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
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'helpful'
    }
  );
  
  module.exports = Helpful;
  