import express from 'express';
import { ProductControllar } from './product.controllar';

const router = express.Router();

router.post('/' , ProductControllar.createProductDb);

router.get('/', ProductControllar.getAllProductDb);
// **6. Search a product**?
router.get('/search', ProductControllar.searchProductDb);

router.get('/:productId', ProductControllar.getASingleProductDb);

router.put('/:productId', ProductControllar.updateProductDb);

router.delete('/:productId', ProductControllar.deleteProductDb);




export const ProductRouter = router;