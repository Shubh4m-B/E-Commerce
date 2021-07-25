const express = require('express');
const router = express.Router();

const { requireSignin } = require('../Controllers/auth');
const { userById } = require('../Controllers/user');

router.get('/secret/:userId', requireSignin, (req, res) => {
    res.json({
        user: req.profile
    })
})

router.param('userId', userById)

module.exports = router;