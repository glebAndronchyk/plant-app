export interface RegistrationFormFields {
  firstName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: 'false' | 'true';
}
