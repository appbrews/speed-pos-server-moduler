import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductsControllers } from './product.controller';
import { ProductValidations } from './product.validation';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductsControllers.createProduct,
);

export const ProductRoutes = router;
