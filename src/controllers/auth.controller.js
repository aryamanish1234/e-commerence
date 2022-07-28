const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require("../model/user");
const Role = require('../utils/constansts');
const config = require('../config/config');


exports.findAllUsers = async(req, res) => {
    const role = req.body.role;
    if (role === Role.role.Buyer) {
        try {
            const UserDetails = await User.find({ role: Role.role.sellers });
            console.log(UserDetails);
            res.status(200).send()
        } catch (err) {
            console.log(err)
            res.status(400).json({ message: "Error in fetch Data ", Error: err.message });
        }
    }
}

exports.register = async(req, res) => {
    console.log("Inside")
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        role: req.body.role
    })

    console.log(newUser);
    try {
        const userCreate = await User.create(newUser);
        console.log(userCreate);

        return res.status(201).json({
            message: true,
            user: userCreate
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: false,
            Error: err.message
        })

    }

};

exports.login = async(req, res) => {
    try {
        console.log(req.body.email);
        console.log(req.body.password);
        const user = await User.findOne({ email: req.body.email });
        console.log(user.password);
        if (!user) {
            return res.status(404).json({
                message: false,
                message: "email/password Invalid",
            })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        let token = jwt.sign({ data: user }, config.SECRET, {
            expiresIn: "1h",
        })
        return res.status(201).json({
            ok: true,
            user,
            token
        })
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: err.message
        })
    }
}