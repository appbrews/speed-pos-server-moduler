import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: 'Category must be at least 3 characters long' })
      .max(20, { message: 'Category cannot exceed 20 characters' }),
    createdBy: z.string(),
  }),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
};
