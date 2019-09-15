const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.get('/', (req, res, next) => {
    User.find()
        .select('email password _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        email: doc.email,
                        password: doc.password,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:8080/users/' + doc._id
                        }
                    }
                })
            }
            res.status(500).json(response);
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
});

router.post('/signup', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'email đã tồn tại'
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                Error: err
            });
        });

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                Error: err
            });
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(200).json({
                        message: 'Đã tạo mới người dùng',
                        createdUser: {
                            password: result.password,
                            email: result.email,
                            _id: result._id,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:8080/users/' + result._id
                            }
                        }
                    });
                })
                .catch(err => {
                    return res.status(500).json({
                        Error: err
                    });
                });
        }
    });
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
        .select('email password _id')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    user: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/users/'
                    }
                });
            } else {
                res.status(200).json({ message: 'không tìm thấy giá trị Id được cung cấp!' });
            }
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
});

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'người dùng đã được xóa',
                request: {
                    type: 'GET',
                    url: 'http://localhost:8080/users/',
                    body: {
                        email: 'String',
                        password: 'String'
                    }
                }
            });
        })
        .catch(err => {
            res.status(200).json({ Error: err });
        });
});

module.exports = router;