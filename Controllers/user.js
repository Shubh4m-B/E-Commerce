const User = require('../Models/Users')

exports.signup = (req, res) => {
    // console.log("req.body", req.body)
    const user = new User(req.body)
    user.save((err) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        res.json({
            user
        });
    })
}