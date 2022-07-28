const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true,
        unique: true
    },

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]

})

module.exports = mongoose.model('Category', categorySchema)