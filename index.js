const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
const checkoutRouter = require('./routes/checkout');

app.use('/', indexRouter);
app.use('/checkout', checkoutRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
