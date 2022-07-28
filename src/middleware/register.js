const User = require('../model/user');
const constants = require('../utils/constansts');



exports.verifyRegister = async(req, res, next) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Failed! name is not provided !"
        })
        return;
    }

    if (!req.body.email) {
        res.status(400).send({
            message: "Failed! Email is not provided !"
        })
        return;
    }

    if (!req.body.password) {
        res.status(400).send({
            message: "Failed Password is not provided !"
        })
    }

    const email = await User.findOne({ email: req.body.email });
    if (email != null) {
        console.log("Checed ");
        res.status(400).send({
            message: "Failed! Email already exists!"
        })
        return;

    }
    next();
};


exports.sellers = async(req, res, next) => {
    const check = await User.findOne({ role: constants.role.sellers })
    if (!check) {
        return res.status(400).json({
            message: "APPLICABLE FOR SELLERS",

        })
    }
    next();
}