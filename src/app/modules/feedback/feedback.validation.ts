import { z } from 'zod';

const createFeedbackValidationSchema = z.object({
  body: z.object({
    createdBy: z.string(),
    feedback: z
      .string()
      .min(3, { message: 'Feedback must be at least 3 characters long' })
      .max(250, { message: 'Feedback cannot exceed 250 characters' })
      .trim()
      .refine((value) => {
        if (!isNaN(Number(value))) {
          throw new Error('Feedback cannot be a number');
        }
        return true;
      }),
  }),
});

export const FeedbackValidations = {
  createFeedbackValidationSchema,
};
