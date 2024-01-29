import {StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {Button} from '@components/Button';
import {Formik} from 'formik';
import {initialValues} from './settings.ts';
import {LoginFormFields} from './types.ts';
import {useNavigation} from '@react-navigation/native';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {PasswordInput} from '@components/inputs/PasswordInput';

export const LoginForm = () => {
  const {navigate} = useNavigation();
  const onSubmit = (values: LoginFormFields) => {
    console.log(values);
    // navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Authorization</StyledText>
      <StyledText style={Typography.mdRegular}>
        Select the appropriate option to authorize your identity
      </StyledText>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleChange, handleSubmit, isValid, errors}) => (
          <>
            <StyledTextInput
              onChangeText={handleChange('email')}
              placeholder="Email"
              errorMessage={errors.email}
            />
            <PasswordInput
              onChangeText={handleChange('password')}
              errorMessage={errors.password}
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
