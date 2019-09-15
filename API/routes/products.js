const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const productController = require('../controllers/product');
const Product = require('../models/product');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', productController.get);

router.post('/', upload.single('productImage'), productController.post);

router.get('/:productId', productController.getId);

router.patch('/:productId', productController.patch);

router.delete('/:productId', productController.delete);

module.exports = router;