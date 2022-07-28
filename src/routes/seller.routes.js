const express = require('express');
const controller = require('../controllers/seller.controller');
const verifyToen = require('../middleware/auth');
const check = require('../middleware/register');

const router = express();

router.post('/seller/create-catalog', [verifyToen.IsAuth, check.sellers], controller.addcatalog);
router.post('/seller/add-product', [verifyToen.IsAuth, check.sellers], controller.addProduct);
router.get('/seller/orders', [verifyToen.IsAuth, check.sellers], controller.getOrder);

module.exports = router;