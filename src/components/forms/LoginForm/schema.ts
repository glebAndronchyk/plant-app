import {z} from 'zod';
import {defaultValidation} from '@constants/validation.ts';
import {FieldNames} from '@constants/fieldNames.ts';

export const loginSchema = z.object({
  [FieldNames.EMAIL]: defaultValidation.email,
  [FieldNames.PASSWORD]: defaultValidation.password,
});
