const router = require('express').Router()
const boxCTRL = require('../../controllers/boxCTRL');
const { route } = require('./user');

const { getAllBox, getBoxById } = boxCTRL;

router
    .route('/boxes')
    .get(getAllBox)

router
    .route('/boxes/:id')
    .get(getBoxById)

module.exports = router;