import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z
    .string()
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  college: z.string().min(1, 'College selection is required'),
  rollNumber: z.string().min(5, 'Roll number must be at least 5 characters long'),
  idCard: z.string().url('ID Card Not uploaded'),
  gender: z.string().min(1, 'Gender selection is required'),
  accommodation: z.boolean(),
  campusAmbassador: z.boolean(),
});
