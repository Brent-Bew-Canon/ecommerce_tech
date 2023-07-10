const router = require('express').Router();
const { Tag, User, Post, Comment, Product, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all products 
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product
        },
      ],
    });

    //log the find all products
    // console.log(categoryData)

    // Serialize data so the template can read it
    const categories = categoryData.map((cat) => cat.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('homepage', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/categories', async (req, res) => {
  try {
    // Get all products 
    const categoryData = await Category.findAll();

    //log the find all products
    // console.log(productData)

    // Serialize data so the template can read it
    const categories = categoryData.map((cat) => cat.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('categories', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/mice', async (req, res) => {
  try {
    // Get mice products 
    const productData = await Product.findAll({
      where: {
        category_id: 1
      },
      include: [
        {
          model: Category
        },
      ],
    });

    //log the find all products
    // console.log(productData)

    // Serialize data so the template can read it
    const products = productData.map((prod) => prod.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('products', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/keyboards', async (req, res) => {
  try {
    // Get mice products 
    const productData = await Product.findAll({
      where: {
        category_id: 2
      },
      include: [
        {
          model: Category
        },
      ],
    });

    //log the find all products
    // console.log(productData)

    // Serialize data so the template can read it
    const products = productData.map((prod) => prod.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('products', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/monitors', async (req, res) => {
  try {
    // Get mice products 
    const productData = await Product.findAll({
      where: {
        category_id: 3
      },
      include: [
        {
          model: Category
        },
      ],
    });

    //log the find all products
    // console.log(productData)

    // Serialize data so the template can read it
    const products = productData.map((prod) => prod.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('products', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/gaming', async (req, res) => {
  try {
    // Get mice products 
    const productData = await Product.findAll({
      where: {
        category_id: 4
      },
      include: [
        {
          model: Category
        },
      ],
    });

    //log the find all products
    // console.log(productData)

    // Serialize data so the template can read it
    const products = productData.map((prod) => prod.get({ plain: true }));


    // Pass serialized data and session flag into template
    res.render('products', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});


// // Use withAuth middleware to prevent access to route
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/createPost', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('create', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });
//     const post = postData.get({ plain: true });

//     const commentData = await Comment.findAll(
//       {
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//         where:
//         {
//           post_id: postData.id
//         }
//       }
//     );
//     const comment = commentData.map((comment) => comment.get({ plain: true }));

//     res.render('post', {
//       post,
//       comment,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
