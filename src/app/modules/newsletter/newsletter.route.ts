import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NewsletterControllers } from './newsletter.controller';
import { NewsletterValidations } from './newsletter.validation';

const router = express.Router();

router.post(
  '/subscribe-newsletter',
  validateRequest(NewsletterValidations.subscribeNewsletterValidationSchema),
  NewsletterControllers.createNewsletter,
);

export const NewsletterRoutes = router;
