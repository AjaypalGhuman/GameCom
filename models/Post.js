const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    //declare the markHelpful method based on the Post model. Will handle the helpful mark query
    static markHelpful(body, models){
        return models.Helpful.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'title',
                    'game_name',
                    'description',
                    'image',
                    'created_at',
                    [
                        // use MySQL aggregate function query to get a count of how many helpful marks the post has and return it under the name `helpful_count`
                        sequelize.literal('(SELECT COUNT(*) FROM helpful WHERE post.id = helpful.post_id)'),
                        'helpful_count'
                    ]
                ]
            });
        });
    };

    static markUnhelpful(body, models){
        return models.Unhelpful.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'title',
                    'game_name',
                    'description',
                    'created_at',
                    [
                        // use MySQL aggregate function query to get a count of how many helpful marks the post has and return it under the name `helpful_count`
                        sequelize.literal('(SELECT COUNT(*) FROM unhelpful WHERE post.id = unhelpful.post_id)'),
                        'unhelpful_count'
                    ]
                ]
            });
        });
    };

};

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      game_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,        
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;
  