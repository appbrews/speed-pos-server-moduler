import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createOwnerValidationSchema } from '../owner/owner.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-owner',
  validateRequest(createOwnerValidationSchema),
  UserControllers.createOwner,
);

export const UserRoutes = router;
