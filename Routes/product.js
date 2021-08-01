const express = require('express');
const router = express.Router();

const { create, productById, read } = require('../Controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../Controllers/auth');
const { userById } = require('../Controllers/user');

router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);
router.param("productId", productById);

module.exports = router;