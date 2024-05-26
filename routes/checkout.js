const express = require('express');
const router = express.Router();

// Checkout page route
router.get('/', (req, res) => {
  res.render('checkout');
});

router.post('/', (req, res) => {
  // Handle form submission (e.g., process payment, save order details)
  console.log('Order details:', req.body);
  res.send('Order processed successfully!');
});

module.exports = router;
