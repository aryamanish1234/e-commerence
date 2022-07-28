const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const config = require('./src/config/config')
const database = require('./src/config/db')
const authrouter = require('./src/routes/auth.routes')
const buyerouter = require('./src/routes/buyer.routes')
const sellerouter = require('./src/routes/seller.routes');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







app.use('/api', authrouter);
app.use('/api', buyerouter);
app.use('/api', sellerouter);


app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to my API' })
})

app.listen(config.PORT, () => {
    console.log("server is running");

})