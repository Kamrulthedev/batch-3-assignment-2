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
exports.OrderControllar = void 0;
const order_service_1 = require("./order.service");
//create order
const createOrderDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Orderdata = req.body;
        const result = yield order_service_1.OrderService.createOrder(Orderdata);
        res.status(200).json({
            success: true,
            message: "Your Order Created Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "This Order Not Create",
            error: err,
        });
    }
});
//get by all Orders
const getallOrderDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getallOrder();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "You are Worng data",
            error: err,
        });
    }
});
//get Order by email 
const getOrderByEmailDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailData = req.query.email;
        if (!emailData) {
            return res.status(400).json({
                success: false,
                message: 'not found your email!!',
            });
        }
        const result = yield order_service_1.OrderService.getOrderByEmail(emailData);
        res.status(200).json({
            success: true,
            message: "Orders get by email in the successfully.",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Orders Fetched UnSuccessfully",
            data: err
        });
    }
});
exports.OrderControllar = {
    createOrderDb,
    getallOrderDb,
    getOrderByEmailDb
};
