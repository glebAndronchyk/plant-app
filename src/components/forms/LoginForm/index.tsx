import {StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {Button} from '@components/Button';
import {Formik} from 'formik';
import {initialValues} from './settings.ts';
import {LoginFormFields} from './types.ts';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {PasswordInput} from '@components/inputs/PasswordInput';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {loginSchema} from '@components/forms/LoginForm/schema.ts';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {authorizeUser} from '@store/app';
import {RootNavigation} from '@navigation/RootStack/types.ts';

// TODO NAVIGATION TYPES SHOULD BE REFACTORED
interface LoginFormProps {
  navigation: RootNavigation;
}

export const LoginForm = ({navigation}: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: LoginFormFields) => {
    dispatch(authorizeUser());
    navigation.navigate('HomeTabs');
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
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          errors,
          touched,
        }) => (
          <>
            <StyledTextInput
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              placeholder="Email"
              errorMessage={touched.email && errors.email}
            />
            <PasswordInput
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              errorMessage={touched.password && errors.password}
            />
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
