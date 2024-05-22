import express from 'express';
import { ProductControllar } from './product.controllar';

const router = express.Router();

router.post('/products' , ProductControllar.createProductDb);

router.get('/products', ProductControllar.getAllProductDb);
// **6. Search a product**?
router.get('/products/search', ProductControllar.searchProductDb);

router.get('/products/:productId', ProductControllar.getASingleProductDb);

router.put('/products/:productId', ProductControllar.updateProductDb);

router.delete('/products/:productId', ProductControllar.deleteProductDb);




export const ProductRouter = router;