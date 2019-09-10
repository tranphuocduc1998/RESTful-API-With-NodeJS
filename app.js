const express = require('express');
const app = express();

const productRoutes = require('./API/routes/products');
const ordersRoutes = require('./API/routes/orders');

//Routes có những yêu cần sử lý
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Không tìm thấy');
    error.status = 404;
    next(error);    
});

app.use((error ,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;