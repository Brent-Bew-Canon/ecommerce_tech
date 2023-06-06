const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');

Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})


// Product.belongsToMany(Category, { through: Tag });
// Category.belongsToMany(Product, { through: Tag });








//User to Post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//Comment to Post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})


//Comment to User
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})



module.exports = { User, Post, Comment, Tag, Product, Category };
