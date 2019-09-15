const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const userController = require('../controllers/user');

router.get('/', userController.getUser);

router.post('/signup', userController.signup);

router.get('/:userId', userController.getUserId);

router.delete('/:userId', userController.delete);

router.post('/login', userController.login);

module.exports = router;