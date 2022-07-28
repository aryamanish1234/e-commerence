const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderItems: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('order', OrderSchema);