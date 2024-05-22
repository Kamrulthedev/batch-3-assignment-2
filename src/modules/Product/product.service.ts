import { EProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (Prodectdata: EProduct) => {
    const result = await Product.create(Prodectdata);
    return result;
  };
  

  export const ProductService = {
    createProduct
  };