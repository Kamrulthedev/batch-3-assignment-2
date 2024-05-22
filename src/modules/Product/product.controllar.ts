import { Request, Response } from "express";
import { ProductService } from "./product.service";

//create Product
const createProductDb = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProduct(productData);
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something was wrong create",
      error: err.message,
    });
  }
};

//get all Products
const getAllProductDb = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.status(200).json({
      success: true,
      message: "ALl Products fetch successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something was wrong product",
      error: err.message,
    });
  }
};

//get A Single Product
const getASingleProductDb = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "A Product fetcheded successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "something was wrong product",
      error: err.message,
    });
  }
};

//Update a Product
const updateProductDb = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const result = await ProductService.updateProduct(productId, productData);
    res.status(200).json({
      success: true,
      message: "A Product update successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something was wrong product",
      error: err,
    });
  }
};

//Delete A Product
const deleteProductDb = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "A Product deleted successfully!",
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something was wrong",
      error: err,
    });
  }
};

//Search A Product
const searchProductDb = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.Term as string;
    const result = await ProductService.searchProduct(searchTerm);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something was wrong",
      error: err.message,
    });
  }
};

//export all functionality
export const ProductControllar = {
  createProductDb,
  getAllProductDb,
  getASingleProductDb,
  updateProductDb,
  deleteProductDb,
  searchProductDb,
};
