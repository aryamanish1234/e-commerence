const express = require('express');
const User = require('../model/user');
const constant = require('../utils/constansts');
const catalog = require('../model/catalog');
const Product = require('../model/product');
const order = require('../model/order');



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

exports.createOrder = async(req, res) => {
    try {
        const sellerId = req.params['seller_id'];
        console.log(sellerId);
        const user = User.findOne({ _id: sellerId });

        const ID = req.body.ID
        console.log(ID)
        const productavaible = Product.find({ _id: ID })

        console.log((await productavaible).length)
        if (!user) {

            return res.status(400).send({
                message: "User not found"
            })
        } else {
            const productavaible = Product.find({ _id: ID })
            if ((await productavaible).length == 0) {
                console.log("Inside if")
                return res.status(400).send({
                    message: "product  not Avaible"
                })
            }

            const newOrder = {
                total: req.body.total,
                orderItems: req.body.orderItems
            }
            console.log(newOrder);
            oerderDetails = await order.create(newOrder);
            return res.status(200).json({
                messge: "Order Completed",
                details: oerderDetails
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: false,
            Error: err.message
        })
    }

}