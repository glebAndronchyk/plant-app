import {RegistrationFormFields} from './types.ts';
import {FieldNames} from '@constants/fieldNames.ts';

export const initialValues: RegistrationFormFields = {
  [FieldNames.FIRST_NAME]: '',
  [FieldNames.PHONE_NUMBER]: '',
  [FieldNames.TERMS]: '',
  [FieldNames.EMAIL]: '',
  [FieldNames.PASSWORD]: '',
  [FieldNames.CONFIRM_PASSWORD]: '',
  [FieldNames.TERMS]: 'false',
} as unknown as RegistrationFormFields;
