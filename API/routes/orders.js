const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const orderController = require('../controllers/orders');

const Order = require('../models/orders');
const Product = require('../models/product');

//Sử lý GET yêu cầu đối với /orders
router.get('/', orderController.get);

router.post('/', orderController.post);

router.get('/:orderId', orderController.getId);

router.patch('/:orderId', orderController.patch);

router.delete('/:orderId', orderController.delete);

module.exports = router;