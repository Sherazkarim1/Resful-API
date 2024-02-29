const express = require('express');
const app = express();

const porductsRoutes = require('./api/routes/products');

app.use(('/products', porductsRoutes) => {
    
})
module.exports = app;