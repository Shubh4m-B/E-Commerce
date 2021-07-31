const express = require('express');
const router = express.Router();

const { create } = require('../Controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../Controllers/auth');
const { userById } = require('../Controllers/user');

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);

module.exports = router;