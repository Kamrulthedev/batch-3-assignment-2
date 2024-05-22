import { EProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (Prodectdata: EProduct) => {
  const result = await Product.create(Prodectdata);
  return result;
};

const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, productData: Partial<EProduct>) => {
  const result = await Product.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const searchProduct = async (Term: string) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: Term, $options: "i" } },
      { description: { $regex: Term, $options: "i" } },
      { tags: { $regex: Term, $options: "i" } },
    ],
  });
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
