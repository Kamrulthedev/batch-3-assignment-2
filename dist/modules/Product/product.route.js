"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllar_1 = require("./product.controllar");
const validate_1 = require("../Validation/validate");
const product_validation_1 = require("../Validation/product.validation");
const router = express_1.default.Router();
router.post("/", (0, validate_1.validate)(product_validation_1.productSchema), product_controllar_1.ProductControllar.createProductDb);
router.get('/', product_controllar_1.ProductControllar.getAllProductDb);
// **6. Search a product**?
router.get('/search', product_controllar_1.ProductControllar.searchProductDb);
router.get('/:productId', product_controllar_1.ProductControllar.getASingleProductDb);
router.put('/:productId', product_controllar_1.ProductControllar.updateProductDb);
router.delete('/:productId', product_controllar_1.ProductControllar.deleteProductDb);
exports.ProductRouter = router;
