const mongoose = require('mongoose');

const productSchama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }
})

module.exports = mongoose.model('product', productSchama)