const express = require('express');
const auth = require('../controllers/auth.controller')
const verifydetails = require('../middleware/register');

const router = express();


router.post("/auth/register", verifydetails.verifyRegister, auth.register);
router.post('/auth/login', auth.login);






module.exports = router