const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Sử lý GET yêu cầu đối với /products'
    });
});

router.post('/', (req, res, next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(200).json({
        message: 'Sử lý POST yêu cầu đối với /products',
        product: product
    });
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Tham số Id là ' + id
    });
});

router.patch('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Cập nhât tham số Id là ' + id
    });
});

router.delete('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Xóa tham số Id là ' + id
    });
});

module.exports = router;