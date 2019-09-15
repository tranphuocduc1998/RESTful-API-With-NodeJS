module.exports.get = function (req, res, next) {
    Order.find()
        .select('quantity _productId _id')
        .populate('_productId', 'name')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        quantity: doc.quantity,
                        _productId: doc._productId,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:8080/orders/' + doc._id
                        }
                    }
                })
            }
            res.status(500).json(response);
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
};

module.exports.post = function (req, res, next) {
    Product.findById(req.body._productId)
        .populate('_productId', 'name')
        .exec()
        .then(product => {
            if (!product) {
                return res.status(200).json({
                    message: 'không tìm thấy sản phẩm cần đặt'
                });
            }
            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                _productId: req.body._productId
            });
            return order.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'Đã tạo một sản phẩm',
                createdOrder: {
                    quantity: result.quantity,
                    _productId: result._productId,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/orders/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                Error: err
            })
        });
};

module.exports.getId = function (req, res, next) {
    const id = req.params.orderId;
    Order.findById(id)
        .select('quantity _productId _id')
        .populate('_productId')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/orders/'
                    }
                });
            } else {
                res.status(200).json({ message: 'không tìm thấy giá trị Id được cung cấp!' });
            }
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
};

module.exports.patch = function (req, res, next) {
    const id = req.params.orderId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Order.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'đơn hàng đã được cập nhật',
                request: {
                    type: 'GET',
                    url: 'http://localhost:8080/orders/' + id
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                Error: err
            });
        });
};

module.exports.delete = function (req, res, next) {
    const id = req.params.orderId;
    Order.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'đơn hàng đã được xóa',
                request: {
                    type: 'GET',
                    url: 'http://localhost:8080/orders/',
                    body: {
                        quantity: 'Number'
                    }
                }
            });
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
};