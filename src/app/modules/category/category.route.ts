import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryControllers } from './category.controller';
import { CategoryValidations } from './category.validation';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory,
);

export const CategoryRoutes = router;
