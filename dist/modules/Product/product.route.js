"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllar_1 = require("./product.controllar");
const router = express_1.default.Router();
router.post('/', product_controllar_1.ProductControllar.createProductDb);
router.get('/', product_controllar_1.ProductControllar.getAllProductDb);
router.get('/:productId', product_controllar_1.ProductControllar.getASingleProduct);
exports.ProductRouter = router;
