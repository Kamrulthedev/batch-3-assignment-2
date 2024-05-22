"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controllar_1 = require("./order.controllar");
const router = express_1.default.Router();
//create a order
router.post("/", order_controllar_1.OrderControllar.createOrderDb);
//get all order
router.get("/", order_controllar_1.OrderControllar.getallOrderDb);
//getOrdersByEmail
router.get("/", order_controllar_1.OrderControllar.getOrderByEmailDb);
exports.OrderRouter = router;
