const express = require('express');
const router = express.Router();

const { signup, signin } = require('../Controllers/user');
const { userSignupValidator } = require('../Validator/index');

router.post('/signup', userSignupValidator, signup);
router.post('/sigin', signin);

module.exports = router;