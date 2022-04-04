const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Helpful, Unhelpful } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',      
      'title',
      'game_name',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM helpful WHERE post.id = helpful.post_id)'), 'helpful_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM unhelpful WHERE post.id = unhelpful.post_id)'), 'unhelpful_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage'
      //once the sessions are done this needs to be uncommented out
      // , {
        // posts,
        // loggedIn: req.session.loggedIn
      // }      
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;