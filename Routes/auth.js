const express = require('express');
const router = express.Router();

const { signup, signin, signout, requireSignin } = require('../Controllers/auth');
const { userSignupValidator } = require('../Validator/index');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;