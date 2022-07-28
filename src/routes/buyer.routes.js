const express = require('express');
const controller = require('../controllers/buyer.controller');
const verifyToen = require('../middleware/auth');
const router = express();

router.get('/buyer/listofsellers', verifyToen.IsAuth, controller.getAllseller);
router.post('/create-order/:seller_id', verifyToen.IsAuth, controller.createOrder)



module.exports = router;