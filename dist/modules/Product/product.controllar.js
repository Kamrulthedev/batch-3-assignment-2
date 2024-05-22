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
const createProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductService.createProduct(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while creating the product",
            error: err.message,
        });
    }
});
const getAllProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProduct();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetch the product",
            error: err.message,
        });
    }
});
const getASingleProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductService.getSingleProduct(productId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetching the product",
            error: err.message,
        });
    }
});
const updateProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = yield product_service_1.ProductService.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product update successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong  updateproduct",
            error: err,
        });
    }
});
const deleteProductDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductService.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product delete successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something was wrong delete product",
            error: err,
        });
    }
});
exports.ProductControllar = {
    createProductDb,
    getAllProductDb,
    getASingleProductDb,
    updateProductDb,
    deleteProductDb
};
