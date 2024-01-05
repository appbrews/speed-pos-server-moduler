import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-owner', UserControllers.createOwner);

export const UserRoutes = router;
