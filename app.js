const express = require('express');
const app = express();

const productsRoutes = require('./api/routes/products');


app.use('/product', productsRoutes);

module.exports = app;
sdjfsdj;fsldfj;a