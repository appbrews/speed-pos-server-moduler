import express from 'express';
import { MerchantServices } from './merchant.service';

const router = express.Router();

router.delete('/:id', MerchantServices.deleteMerchantFromDB);

export const MerchantRoute = router;
