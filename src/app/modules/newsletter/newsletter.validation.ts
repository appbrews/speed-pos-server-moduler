import { z } from 'zod';

const subscribeNewsletterValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const NewsletterValidations = {
  subscribeNewsletterValidationSchema,
};
