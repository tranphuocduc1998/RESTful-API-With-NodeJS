const express = require('express');
const app = express();

const productRoutes = require('./API/routes/products');
const ordersRoutes = require('./API/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);


module.exports = app;