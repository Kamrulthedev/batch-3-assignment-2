"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllar_1 = require("./product.controllar");
const router = express_1.default.Router();
router.post('/products', product_controllar_1.ProductControllar.createProductDb);
router.get('/products', product_controllar_1.ProductControllar.getAllProductDb);
// **6. Search a product**?
router.get('/products/search', product_controllar_1.ProductControllar.searchProductDb);
router.get('/products/:productId', product_controllar_1.ProductControllar.getASingleProductDb);
router.put('/products/:productId', product_controllar_1.ProductControllar.updateProductDb);
router.delete('/products/:productId', product_controllar_1.ProductControllar.deleteProductDb);
exports.ProductRouter = router;
