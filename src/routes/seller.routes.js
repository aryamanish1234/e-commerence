const express = require('express');
const controller = require('../controllers/seller.controller');

const router = express();

router.post('/seller/create-catalog', controller.addcatalog);
router.post('/seller/add-product', controller.addProduct);


module.exports = router;