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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
//create Porduct
const createProduct = (Prodectdata) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(Prodectdata);
    return result;
});
//get all Product
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
//get a Single Product
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //get id
    const result = yield product_model_1.Product.findById(id);
    return result;
});
//Update A Product
const updateProduct = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, productData, {
        new: true,
    });
    return result;
});
//Delete A Product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
//Searc A Product
const searchProduct = (Term) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({
        $or: [
            { name: { $regex: Term, $options: "i" } },
            { description: { $regex: Term, $options: "i" } },
            { tags: { $regex: Term, $options: "i" } },
        ],
    });
    return result;
});
//export all function
exports.ProductService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
};
