const express = require('express');
const router = express.Router();

const { signup } = require('../Controllers/user');
const { userSignupValidator } = require('../Validator/index');

router.post('/signup', userSignupValidator, signup);

module.exports = router;