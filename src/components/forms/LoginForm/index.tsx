import {StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {Button} from '@components/Button';
import {Field, FieldProps, Formik} from 'formik';
import {initialValues} from './settings.ts';
import {LoginFormFields} from './types.ts';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {PasswordInput} from '@components/inputs/PasswordInput';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {loginSchema} from '@components/forms/LoginForm/schema.ts';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {user} from '@API';
import {authorizeUser} from '@store/app';
import {FieldNames} from '@constants/fieldNames.ts';
import {AuthStackScreenProps} from '@navigation/RootStack/AuthStack/types.ts';

type LoginFormProps = {
  navigation: AuthStackScreenProps<'Login'>['navigation'];
};

export const LoginForm = ({navigation}: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const onSubmit = async ({email, password}: LoginFormFields) => {
    const resp = await user.login(email, password);
    if (!resp.error) {
      dispatch(authorizeUser());
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Authorization</StyledText>
      <StyledText style={Typography.mdRegular}>
        Select the appropriate option to authorize your identity
      </StyledText>
      <Formik
        validateOnMount
        validationSchema={toFormikValidationSchema(loginSchema)}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {({handleSubmit, isValid}) => (
          <>
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
            <Button
              label="Log in"
              onPress={() => handleSubmit()}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 24},
  title: {textAlign: 'center', ...Typography['3xl']},
});
