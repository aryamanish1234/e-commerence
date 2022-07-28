const express = require('express');
const User = require('../model/user');
const constant = require('../utils/constansts');
const catalog = require('../model/catalog');
const product = require('../model/product');

exports.addcatalog = async(req, res) => {
    try {
        let category = req.body;
        console.log(category);
        const Data = await catalog.create(category)
        return res.status(200).json({
            message: true,
            category: Data
        })
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: false,
            Error: err.message
        })
    }
}


exports.addProduct = async(req, res) => {
    let productData = req.body;
    console.log(productData);
    await product.create(productData).then((data) => {
        catalog.findById(data.category).then((Category) => {
            Category.products.push(data._id)
            Category.save();
        })
        return res.status(200).json({
            message: "ok",
            Data: data
        })
    }).catch((err) => {
        console.log(err);
        return res.status(400).json({
            message: "not ok",
            Error: err.message
        })
    })
}