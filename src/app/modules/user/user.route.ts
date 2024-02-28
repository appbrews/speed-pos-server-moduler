import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createMemberValidationSchema } from '../member/member.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-member',
  validateRequest(createMemberValidationSchema),
  UserControllers.createMember,
);

export const UserRoutes = router;
