import express from 'express';
import { OwnerControllers } from './owner.controller';

const router = express.Router();

router.delete('/:id', OwnerControllers.deleteOwner);

export const OwnerRoutes = router;
