const express = require('express');
const controller = require('../controllers/buyer.controller');

const router = express();

router.get('/buyer/listofsellers', controller.getAllseller);




module.exports = router;