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
    }
})

module.exports = mongoose.model('product', productSchama)