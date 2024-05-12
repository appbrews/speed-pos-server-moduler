import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createMerchantValidationSchema } from '../merchant/merchant.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-merchant',
  validateRequest(createMerchantValidationSchema),
  UserControllers.createMerchant,
);

export const UserRoutes = router;
