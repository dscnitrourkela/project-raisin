import { z } from 'zod';

import { notAllowedInstitutes } from '../content/Registration/details';

const normalizeInstituteName = (name) => {
  return name.toLowerCase().replace(/['"`]/g, '').replace(/\s+/g, ' ').trim();
};

const normalizedBlockedInstitutes = notAllowedInstitutes.map(normalizeInstituteName);

export const userSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters'),
  email: z.string().regex(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/, {
    message: 'Invalid email address. Please use your Gmail address',
  }),
  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d{10}$/, 'Invalid phone number'),
  institute: z
    .string()
    .min(1, 'University name is required')
    .transform((val) => {
      return val
        .replace(/['"`-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    })
    .refine(
      (val) => {
        const normalized = normalizeInstituteName(val);
        return !normalizedBlockedInstitutes.includes(normalized);
      },
      {
        message:
          "Students from this institute have been officially barred from participating in INNO'24",
      },
    ),
  idCard: z.string().url('ID Card is required'),
  payment: z.string().url('Payment receipt is required'),
  university: z
    .string()
    .min(1, 'University name is required')
    .transform((val) => {
      return val
        .replace(/['"`-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    })
    .refine(
      (val) => {
        const normalized = normalizeInstituteName(val);
        return !normalizedBlockedInstitutes.includes(normalized);
      },
      {
        message:
          "Students from this institute have been officially barred from participating in INNO'24",
      },
    ),
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
  gender: z.enum(['MALE', 'FEMALE'], {
    errorMap: () => ({ message: 'Gender selection is required and must be either male or female' }),
  }),
  undertaking: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
  campusAmbassador: z.boolean().optional(),
  transactionID: z.string().min(1, 'Transaction ID is required'),
});
