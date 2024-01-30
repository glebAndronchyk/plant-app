import {z} from 'zod';
import {defaultValidation} from '@constants/validation.ts';
import {FieldNames} from '@constants/fieldNames.ts';

export const registrationSchema = z
  .object({
    [FieldNames.FIRST_NAME]: defaultValidation.name,
    [FieldNames.PHONE_NUMBER]: defaultValidation.phoneNumber,
    [FieldNames.TERMS]: defaultValidation.terms,
    [FieldNames.EMAIL]: defaultValidation.email,
    [FieldNames.PASSWORD]: defaultValidation.password,
    [FieldNames.CONFIRM_PASSWORD]: defaultValidation.password,
  })
  .refine(
    data => data[FieldNames.PASSWORD] === data[FieldNames.CONFIRM_PASSWORD],
    {
      message: 'Passwords do not match',
      path: [FieldNames.CONFIRM_PASSWORD],
    },
  );
