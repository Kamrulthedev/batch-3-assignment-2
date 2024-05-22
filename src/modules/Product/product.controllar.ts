import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProductDb = async (req: Request, res: Response)=> {
    try {
        const productData = req.body;
        const result = await ProductService.createProduct(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while creating the product",
            error: err.message,
        });
    }
};
const getAllProductDb = async (req:Request, res:Response)=>{
    try{
        const result = await ProductService.getAllProduct();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetch the product",
            error: err.message,
        });
    }
};

const getASingleProductDb = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.productId;
        const result = await ProductService.getSingleProduct(productId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetching the product",
            error: err.message,
        });
    }
};

const updateProductDb = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = await ProductService.updateProduct(productId, productData);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while updating the product",
            error: err.message,
        });
    }
};


export const ProductControllar = {
    createProductDb,
    getAllProductDb,
    getASingleProductDb,
    updateProductDb
};
