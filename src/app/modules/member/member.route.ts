import express from 'express';
import { MemberServices } from './member.service';

const router = express.Router();

router.delete('/:id', MemberServices.deleteMemberFromDB);

export const MemberRoutes = router;
