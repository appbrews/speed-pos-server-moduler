import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductsControllers } from './product.controller';
import { ProductValidations } from './product.validation';

const router = express.Router();

// Create product route
router.post(
  '/create-product',
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductsControllers.createProduct,
);

// Get all products route
router.get('/get-all-products', ProductsControllers.getAllProducts);

export const ProductRoutes = router;
