import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: 'Product name must be at least 3 characters long' })
      .max(20, { message: 'Product name cannot exceed 20 characters' }),
    price: z.number(),
    image: z.string(),
    quantity: z.number(),
    category: z.string(),
    soldUnits: z.string(),
    createdBy: z.string(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
};
