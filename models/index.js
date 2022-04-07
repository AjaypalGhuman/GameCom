const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Helpful = require('./Helpful');
const Unhelpful = require('./Unhelpful');
const Image = require('./Image');

// create associations
//a user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//a post belongs to a single user  
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//users can mark many posts as helpfuls
User.belongsToMany(Post, {
    through: Helpful,
    as: 'helpful_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//posts can be marked as helpful by users
Post.belongsToMany(User, {
    through: Helpful,
    as: 'helpful_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
//users can mark many posts as unhelpfuls
User.belongsToMany(Post, {
    through: Unhelpful,
    as: 'unhelpful_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//posts can be marked as unhelpful by users
Post.belongsToMany(User, {
    through: Unhelpful,
    as: 'unhelpful_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
//a helpful review mark belongs to a user
Helpful.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//a helpful review mark belongs to a post
Helpful.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
//a user can make many Helpful marks
User.hasMany(Helpful, {
    foreignKey: 'user_id'
});
//a post can have many Helpful marks
Post.hasMany(Helpful, {
    foreignKey: 'post_id'
});
//an unhelpful review mark belongs to a user
Unhelpful.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//an unhelpful review mark belongs to a post
Unhelpful.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
//a user can make many Unhelpful marks
User.hasMany(Unhelpful, {
    foreignKey: 'user_id'
});
//a post can have many Unhelpful marks
Post.hasMany(Unhelpful, {
    foreignKey: 'post_id'
});

// a comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
// a comment belongs to a post  
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
//a user can have many comments  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
// a post can have many comments 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
// a post can have one image
// Post.hasOne(Image,{
//     foreignKey: 'post_id'
// });
// //an image belongs to a post
// Image.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
// });


module.exports = {User, Post, Comment, Helpful, Unhelpful, Image};

