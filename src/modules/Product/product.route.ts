import express from 'express';
import { ProductControllar } from './product.controllar';

const router = express.Router();

router.post('/' , ProductControllar.createProductDb);

router.get('/', ProductControllar.getAllProductDb);

router.get('/:productId', ProductControllar.getASingleProductDb);

router.put('/:productId', ProductControllar.updateProductDb);

router.delete('/:productId', ProductControllar.deleteProductDb);


export const ProductRouter = router;