import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create product into database
const createProductIntoDB = (payload: TProduct) => {
  const result = Product.create(payload);
  return result;
};

// Get all products from database
const getAllProductsFromDB = () => {
  const result = Product.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
