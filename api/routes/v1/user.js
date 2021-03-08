import express from 'express';
import { userCtrl } from '../../controllers/userCtrl.js';

//config
const router = express.Router();
const {getUser, postUser} = userCtrl;

router
    .route('/user')
    .get(getUser)
    .post(postUser)

export default router;