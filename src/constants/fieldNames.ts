export type NamesKeys = keyof typeof FieldNames;
export type NamesValues = (typeof FieldNames)[NamesKeys];

export const FieldNames = {
  CONFIRM_PASSWORD: 'confirmPassword',
  EMAIL: 'email',
  FIRST_NAME: 'firstName',
  PASSWORD: 'password',
  PHONE_NUMBER: 'phoneNumber',
  TERMS: 'terms',
};

export const placeholders: Record<NamesValues, string> = {
  [FieldNames.CONFIRM_PASSWORD]: 'Confirm Password',
  [FieldNames.EMAIL]: 'Email',
  [FieldNames.FIRST_NAME]: 'Name',
  [FieldNames.PASSWORD]: 'Password',
  [FieldNames.PHONE_NUMBER]: 'Phone Number',
};
