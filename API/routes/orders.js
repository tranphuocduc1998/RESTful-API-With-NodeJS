const express = require('express');

const router = express.Router();

//Sử lý GET yêu cầu đối với /orders
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Sử lý GET yêu cầu đối với /orders'
    });
});

router.post('/', (req, res, next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(200).json({
        message: 'Sử lý POST yêu cầu đối với /orders',
        order: order
    });
});

router.get('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'Hàng đã đặt',
        order: req.params.orderId
    });
});

router.patch('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'cập nhật hàng đã đặt',
        order: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'Xóa hàng đã đặt',
        order: req.params.orderId
    });
});

module.exports = router;