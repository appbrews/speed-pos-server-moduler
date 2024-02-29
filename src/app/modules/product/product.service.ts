import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = (payload: TProduct) => {
  const result = Product.create(payload);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
