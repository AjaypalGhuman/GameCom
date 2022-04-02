const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Unhelpful extends Model {}

Unhelpful.init(
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
      modelName: 'unhelpful'
    }
  );
  
  module.exports = Unhelpful;