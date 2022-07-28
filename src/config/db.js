const config = require('./config');
const mongoose = require('mongoose');


mongoose.connect(config.MONGODB, {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Database connected ")
})