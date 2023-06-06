const sequelize = require('../config/connection');
const { User, Post, Category, Product } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const categoryData = require('./category.json');
const productData = require('./product.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const cat of categoryData) {
    await Category.create({
      ...cat,
    });
  }

  for (const prod of productData) {
    await Product.create({
      ...prod,
    });
  }

  process.exit(0);
};

seedDatabase();
