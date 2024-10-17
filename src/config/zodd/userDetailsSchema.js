import { z } from 'zod';
import { notAllowedInstitutes } from '../content/Registration/details';

export const userSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  institute: z
    .string()
    .min(1, 'Institute name is required')
    .refine((val) => notAllowedInstitutes.indexOf(val.toUpperCase()) === -1, {
      message:
        "Students from this institute have been officially barred from participating in INNO'24",
    }),
  university: z.string().min(1, 'University name is required'),
  rollNumber: z.string().min(1, 'Roll number is required'),
  referralCode: z
    .string()
    .regex(/^\d+$/, 'Invalid referral code')
    .min(10, 'Invalid referral code')
    .optional()
    .or(z.literal('')),
  permission: z.boolean().refine((val) => val === true, {
    message: "You must have permission from your institute's authority",
  }),
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender selection is required and must be either male or female' }),
  }),
  undertaking: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
  campusAmbassador: z.boolean().optional(),
});
