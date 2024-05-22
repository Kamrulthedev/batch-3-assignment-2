"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controllar_1 = require("./order.controllar");
const validate_1 = require("../Validation/validate");
const order_validation_1 = require("../Validation/order.validation");
const router = express_1.default.Router();
//create a order
router.post("/", (0, validate_1.validate)(order_validation_1.orderSchema), order_controllar_1.OrderControllar.createOrderDb);
// //getOrdersByEmail
// router.get("/", OrderControllar.getOrderByEmailDb);
//get all order
router.get("/", order_controllar_1.OrderControllar.getallOrderDb);
exports.OrderRouter = router;
