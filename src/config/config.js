require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 4000,
    MONGODB: process.env.MONGODB,
    SECRET: process.env.SECRET
}