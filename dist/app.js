"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_route_1 = require("./modules/Product/product.route");
const order_route_1 = require("./modules/Order/order.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use("/api/products", product_route_1.ProductRouter);
app.use("/api/orders", order_route_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("Hello Prodects!");
});
exports.default = app;
