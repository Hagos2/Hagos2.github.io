const jwt = require('jsonwebtoken');

const User = require('../models/users')

exports.login = async (req, res,next) => {
    const {username, password} = req.body;
    if (username && password) {
        let result;
        try {
            result = await User.findOne({ username, password });
        } catch (error) {
            return next(new Error('User NOT found'));
        }
        if (result) {
            const accessToken = jwt.sign({
                id: result._id,
                username: result.username,
                iat: Date.now()
            }, SECRET);
            res.status(200).json( { accessToken });
        } else {
            res.status(400).json( {error: "Invalid username and password"});
        }
    } else {
        res.status(400).json({error: "Please input username and password"})
    }
}