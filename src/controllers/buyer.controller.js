const express = require('express');
const User = require('../model/user');
const constant = require('../utils/constansts');
const catalog = require('../model/catalog');
const product = require('../model/product');

exports.getAllseller = async(req, res) => {
    try {
        const SellersList = await User.find({ role: constant.role.sellers })
            //console.log(SellersList);
        list = [];
        SellersList.forEach(user => {
            list.push({
                id: user._id,
                name: user.name,
                email: user.email
            })
        })
        console.log(list);
        return res.status(200).json({
            message: true,
            list: list
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: false,
            Error: err.message
        })
    }
}