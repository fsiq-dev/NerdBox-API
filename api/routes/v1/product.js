const router = require('express').Router();
const productCTRL = require('../../controllers/productCTRL');

const { getAllProduct } = productCTRL;
router
    .route('/product')
    .get(getAllProduct)

module.exports = router;