import {z} from 'zod';

export const defaultValidation = {
  email: z.string().email(),
  password: z.string().min(5, {message: 'Password is too short'}),
  name: z.string().min(2, {message: 'Name is too short'}),
  terms: z.string().refine(val => val === 'true'),
  phoneNumber: z.string(),
};
