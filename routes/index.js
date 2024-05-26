const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { products: [{name: 'Product 1', price: 100}, {name: 'Product 2', price: 200}] });
});

module.exports = router;
