const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 10,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "BUYER"
    },
    createdCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
})

module.exports = mongoose.model("user", UserSchema);