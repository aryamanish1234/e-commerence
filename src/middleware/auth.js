const config = require("../config/config");
const jwt = require('jsonwebtoken')


exports.IsAuth = (req, res, next) => {
    let token = req.headers['token'];
    if (!token) {
        return res.status(400).json({
            message: "There will be No Token"
        })
    }

    jwt.verify(token, config.SECRET, (err, decode) => {
        if (err) {
            return res.status(401).json({
                message: "Unauthorthorized"
            })
        }
        req.email = decode.email;
        next();
    })
}