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

export const ProductControllar = {
    createProductDb
};
