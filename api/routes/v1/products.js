import express from 'express';
import { productsCtrl } from '../../controllers/productsCtrl.js'; 

//config
const router = express.Router();
const { getProduct } = productsCtrl;

router
    .route('/products')
    .get(getProduct)

export default router;