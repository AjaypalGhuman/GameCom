const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Helpful, Unhelpful } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');



// get all posts
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'game_name',
      'image',
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'game_name',
      'description',
      'image',
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', [ upload], (req, res) => {
  Post.create({
    title: req.body.title,
    game_name: req.body.game_name,
    description: req.body.description,
    image: req.file.path,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/helpful', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.markHelpful({ ...req.body, user_id: req.session.user_id }, { Helpful, Comment, User })
    .then(updatedHelpfulData => res.json(updatedHelpfulData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/unhelpful', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.markUnhelpful({ ...req.body, user_id: req.session.user_id }, { Unhelpful, Comment, User })
    .then(updatedUnhelpfulData => res.json(updatedUnhelpfulData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      game_name: req.body.game_name,
      description: req.body.description,
      image: req.file.path,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
