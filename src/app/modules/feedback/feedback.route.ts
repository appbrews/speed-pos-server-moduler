import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackControllers } from './feedback.controller';
import { FeedbackValidations } from './feedback.validation';

const router = express.Router();

router.post(
  '/create-feedback',
  validateRequest(FeedbackValidations.createFeedbackValidationSchema),
  FeedbackControllers.createFeedback,
);

export const FeedbackRoutes = router;
