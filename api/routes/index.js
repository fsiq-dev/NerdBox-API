import express from 'express';
import { indexCtrl } from '../controllers/indexCtrl.js'
const { getIndex } = indexCtrl

//config
const router = express.Router();

router
    .route('/')
    .get(getIndex)
    
export default router;
