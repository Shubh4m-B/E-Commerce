const User = require('../Models/Users')
const { errorHandler } = require('../Helpers/dbErrorHandler')

exports.signup = (req, res) => {
    // console.log("req.body", req.body)
    const user = new User(req.body)
    user.save((err) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    })
}