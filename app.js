const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const environment = require('./environment');
const app = express();

const productRoutes = require('./API/routes/products');
const ordersRoutes = require('./API/routes/orders');

mongoose.connect('mongodb+srv://node-rest:' + environment.MONGO_PASS + '@node-rest-s7o6w.gcp.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes có những yêu cần sử lý
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    const error = new Error('Không tìm thấy');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;