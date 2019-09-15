module.exports.get = function (req, res, next) {
    Product.find()
        .select('name price _id productImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        _id: doc._id,
                        productImage: doc.productImage,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:8080/products/' + doc._id
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
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    });

    product
        .save()
        .then(result => {
            res.status(200).json({
                message: 'Đã tạo một sản phẩm',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    productImage: result.productImage,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/products/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
};

module.exports.getId = function (req, res, next) {
    const id = req.params.productId;
    Product.findById(id)
        .select('name price _id productImage')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/products/'
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
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'sản phẩm đã được cập nhật',
                request: {
                    type: 'GET',
                    url: 'http://localhost:8080/products/' + id
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
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'sản phẩm đã được xóa',
                request: {
                    type: 'GET',
                    url: 'http://localhost:8080/products/',
                    body: {
                        name: 'String',
                        price: 'Number'
                    }
                }
            });
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
};