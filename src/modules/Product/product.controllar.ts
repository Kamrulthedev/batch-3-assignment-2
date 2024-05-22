import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProductDb = async (req: Request, res: Response)=> {
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
            message: "Something was wrong create product",
            error: err.message,
        });
    }
};
const getAllProductDb = async (req:Request, res:Response)=>{
    try{
        const result = await ProductService.getAllProduct();
        res.status(200).json({
            success: true,
            message: "Products fetch successfully!",
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

const getASingleProductDb = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await ProductService.getSingleProduct(productId);
            res.status(200).json({
                success: true,
                message: "Product fetcheded successfully!",
                data: result,
            });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "something was wrong fetche product",
            error: err.message,
        });
    }
};

const updateProductDb = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = await ProductService.updateProduct(productId, productData);
            res.status(200).json({
                success: true,
                message: "Product update successfully!",
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
const deleteProductDb = async (req: Request, res: Response)=> {
    try {
        const productId = req.params.productId;
        const result = await ProductService.deleteProduct(productId);
            res.status(200).json({
                success: true,
                message:"Product deleted successfully!",
                data:null
            });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something was wrong product",
            error: err,
        });
    }
};

export const ProductControllar = {
    createProductDb,
    getAllProductDb,
    getASingleProductDb,
    updateProductDb,
    deleteProductDb
};
