//import
const router = require('express').Router();
const userCTRL = require('../controllers/userCTRL')

//config
const {get} = userCTRL;

router
    .route('/users')
    .get(get)
    
module.exports = router;