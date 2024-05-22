import express from 'express';
import { ProductControllar } from './product.controllar';

const router = express.Router();

router.post('/' , ProductControllar.createProductDb);

router.get('/', ProductControllar.getAllProductDb);

router.get('/:productId', ProductControllar.getASingleProduct);


export const ProductRouter = router;