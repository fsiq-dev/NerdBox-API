//import
const router = require('express').Router();

const userCTRL = require('../controllers/userCTRL')

//config
const {getAllUser} = userCTRL;

router
    .route('/users')
    .get(getAllUser)
    
module.exports = router;