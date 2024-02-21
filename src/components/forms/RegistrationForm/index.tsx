import {StyleSheet, View} from 'react-native';
import {AuthorizationProposal} from '@components/AuthorizationProposal';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {Field, FieldProps, Formik} from 'formik';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {PasswordInput} from '@components/inputs/PasswordInput';
import {initialValues} from './settings.ts';
import {Button} from '@components/Button';
import {FieldNames} from '@constants/fieldNames.ts';
import {TermsOfUse} from '@components/TermsOfUse';
import {registrationSchema} from './schema.ts';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {ukrainianPhoneMask} from '@constants/phoneMasks.ts';
import {user} from '@API';
import {RegistrationFormFields} from './types.ts';
import {AuthStackScreenProps} from '@navigation/RootStack/AuthStack/types.ts';

interface RegistrationFormProps {
  navigation: AuthStackScreenProps<'Registration'>['navigation'];
}

export const RegistrationForm = ({navigation}: RegistrationFormProps) => {
  const onSubmit = async ({
    email,
    password,
    phoneNumber,
    firstName,
  }: RegistrationFormFields) => {
    const {error} = await user.register(email, password, phoneNumber, {
      firstName,
    });

    if (!error) {
    }
  };

  return (
    <View>
      <StyledText style={styles.title}>Create an account</StyledText>
      <AuthorizationProposal type="log-in" />
      <View style={{gap: 24, marginTop: 16}}>
        <StyledText style={styles.description}>
          Please fill in the fields to create an account
        </StyledText>
        <Formik
          validateOnMount
          validationSchema={toFormikValidationSchema(registrationSchema)}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({handleSubmit, isValid}) => {
            return (
              <>
                <Field name={FieldNames.FIRST_NAME}>
                  {({
                    field: {name, onChange, onBlur},
                    meta: {error, touched},
                  }: FieldProps) => (
                    <StyledTextInput
                      name={name}
                      onChangeText={onChange(name)}
                      onBlur={onBlur(name)}
                      errorMessage={touched && error}
                    />
                  )}
                </Field>
                <Field name={FieldNames.PHONE_NUMBER}>
                  {({
                    field: {name, onChange, onBlur},
                    meta: {error, touched},
                  }: FieldProps) => (
                    <StyledTextInput
                      name={name}
                      keyboardType="numeric"
                      mask={ukrainianPhoneMask}
                      onChangeText={onChange(name)}
                      onBlur={onBlur(name)}
                      valueUsage="extracted"
                      errorMessage={touched && error}
                    />
                  )}
                </Field>
                <Field name={FieldNames.EMAIL}>
                  {({
                    field: {name, onChange, onBlur},
                    meta: {error, touched},
                  }: FieldProps) => (
                    <StyledTextInput
                      name={name}
                      onChangeText={onChange(name)}
                      onBlur={onBlur(name)}
                      errorMessage={touched && error}
                    />
                  )}
                </Field>
                <Field name={FieldNames.PASSWORD}>
                  {({
                    field: {name, onChange, onBlur},
                    meta: {error, touched},
                  }: FieldProps) => (
                    <PasswordInput
                      name={name}
                      onChangeText={onChange(name)}
                      onBlur={onBlur(name)}
                      errorMessage={touched && error}
                    />
                  )}
                </Field>
                <Field name={FieldNames.CONFIRM_PASSWORD}>
                  {({
                    field: {name, onChange, onBlur},
                    meta: {error, touched},
                  }: FieldProps) => (
                    <PasswordInput
                      name={name}
                      onChangeText={onChange(name)}
                      onBlur={onBlur(name)}
                      errorMessage={touched && error}
                    />
                  )}
                </Field>
                <Field name={FieldNames.TERMS}>
                  {({field: {onChange, name}}: FieldProps) => (
                    <TermsOfUse onChange={onChange(name)} />
                  )}
                </Field>
                <Button
                  disabled={!isValid}
                  label="Sign Up"
                  variant="filled"
                  onPress={() => handleSubmit()}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {textAlign: 'center', marginBottom: 8, ...Typography['3xl']},
  description: {...Typography.mdRegular},
});
