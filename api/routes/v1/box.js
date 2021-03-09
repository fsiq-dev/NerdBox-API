const router = require('express').Router()
const boxCTRL = require('../../controllers/boxCTRL');

const { getAllBox } = boxCTRL;

router
    .route('/boxes')
    .get(getAllBox)

module.exports = router;