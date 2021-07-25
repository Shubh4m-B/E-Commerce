const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../Controllers/auth');
const { userById } = require('../Controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
})

router.param('userId', userById)

module.exports = router;