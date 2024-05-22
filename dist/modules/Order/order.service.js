"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_shema_1 = require("./order.shema");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = new order_shema_1.Order(orderData);
    return yield result.save();
});
const getallOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_shema_1.Order.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_shema_1.Order.find({ email });
    return result;
});
exports.OrderService = {
    createOrder,
    getallOrder,
    getOrderByEmail
};
