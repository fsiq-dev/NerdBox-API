import express from 'express';
import { userCtrl } from '../../controllers/userCtrl.js';

//config
const router = express.Router();
const {getUser} = userCtrl;

router
    .route('/user')
    .get(getUser)

export default router;