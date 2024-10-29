import { z } from 'zod';
import { notAllowedInstitutes } from '../content/Registration/details';

const PATTERNS = {
  NAME: /^[a-zA-Z\s]+$/,
  EMAIL: /^[a-z0-9](?:\.?[a-z0-9]){5,}@g(?:oogle)?mail\.com$/,
  PHONE: /^\d{10}$/,
  REFERRAL: /^\d{10,}$/,
};

const MESSAGES = {
  REQUIRED: (field) => `${field} is required`,
  INVALID: (field) => `Invalid ${field.toLowerCase()}`,
  INSTITUTE_BANNED:
    "Students from this institute/university have been officially barred from participating in INNO'24",
  PERMISSION_REQUIRED: "You must have permission from your institute's authority",
  TERMS_REQUIRED: 'You must agree to the terms and conditions',
  GENDER_REQUIRED: 'Gender selection is required and must be either male or female',
};

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/['"`-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const normalizedBlockedInstitutes = new Set(notAllowedInstitutes.map(normalizeText));

const institutionValidation = z
  .string()
  .min(1, MESSAGES.REQUIRED('Institution name'))
  .transform(normalizeText)
  .refine((val) => !normalizedBlockedInstitutes.has(val), { message: MESSAGES.INSTITUTE_BANNED });

export const userSchema = z.object({
  name: z.string().min(1, MESSAGES.REQUIRED('Name')).regex(PATTERNS.NAME, MESSAGES.INVALID('name')),

  email: z
    .string()
    .regex(PATTERNS.EMAIL, MESSAGES.INVALID('email address. Please use your Gmail address')),

  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(PATTERNS.PHONE, MESSAGES.INVALID('phone number')),

  institute: institutionValidation,
  university: institutionValidation,

  idCard: z.string().url(MESSAGES.REQUIRED('ID Card')),

  payment: z.string().url(MESSAGES.REQUIRED('Payment receipt')),

  rollNumber: z.string().min(1, MESSAGES.REQUIRED('Roll number')),

  referralCode: z
    .string()
    .regex(PATTERNS.REFERRAL, MESSAGES.INVALID('referral code'))
    .optional()
    .or(z.literal('')),

  permission: z.boolean().refine((val) => val === true, {
    message: MESSAGES.PERMISSION_REQUIRED,
  }),

  gender: z.enum(['MALE', 'FEMALE'], {
    errorMap: () => ({ message: MESSAGES.GENDER_REQUIRED }),
  }),

  undertaking: z.boolean().refine((val) => val === true, {
    message: MESSAGES.TERMS_REQUIRED,
  }),

  campusAmbassador: z.boolean().optional(),

  transactionID: z.string().min(1, MESSAGES.REQUIRED('Transaction ID')),
});
