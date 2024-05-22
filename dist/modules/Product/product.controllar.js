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
exports.ProductControllar = void 0;
const product_service_1 = require("./product.service");
//create Product
const createProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductService.createProduct(productData);
        res.status(200).json({
            success: true,
            message: "Product create successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong create",
            error: err.message,
        });
    }
});
//get all Products
const getAllProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProduct();
        res.status(200).json({
            success: true,
            message: "ALl Products fetch successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong product",
            error: err.message,
        });
    }
});
//get A Single Product
const getASingleProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductService.getSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "A Product fetcheded successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something was wrong product",
            error: err.message,
        });
    }
});
//Update a Product
const updateProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = yield product_service_1.ProductService.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "A Product update successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong product",
            error: err,
        });
    }
});
//Delete A Product
const deleteProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductService.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "A Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong",
            error: err,
        });
    }
});
//Search A Product
const searchProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.Term;
        const result = yield product_service_1.ProductService.searchProduct(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong",
            error: err.message,
        });
    }
});
//export all functionality
exports.ProductControllar = {
    createProductDb,
    getAllProductDb,
    getASingleProductDb,
    updateProductDb,
    deleteProductDb,
    searchProductDb,
};
