//import
const router = require('express').Router();

const userCTRL = require('../../controllers/userCTRL')

//config
const {getAllUser, getUserByID} = userCTRL;

router
    .route('/users')
    .get(getAllUser)

router
    .route('/users/:id')
    .get(getUserByID)    
module.exports = router;