import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = (payload: TCategory) => {
  console.log(payload);
  const result = Category.create(payload);
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
};
