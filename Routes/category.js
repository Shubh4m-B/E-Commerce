const express = require('express');
const router = express.Router();

const { create, categoryById, read } = require('../Controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../Controllers/auth');
const { userById } = require('../Controllers/user');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;