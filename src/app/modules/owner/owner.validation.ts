import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

export const createOwnerValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    owner: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      email: z.string().email(),
      contactNo: z.string(),
      country: z.string(),
      city: z.string(),
      street: z.string(),
      //   profileImage: z.string().optional(),
    }),
  }),
});

export const ownerValidations = {
  createOwnerValidationSchema,
};
