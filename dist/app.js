"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/Product/product.route");
const order_route_1 = require("./modules/Order/order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', product_route_1.ProductRouter);
app.use('/api', order_route_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("Hello Prodects!");
});
exports.default = app;
