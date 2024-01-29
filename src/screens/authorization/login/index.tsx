import {View} from 'react-native';
import {LoginForm} from '@components/forms/LoginForm';
import {BetweenTextDivider} from '@components/dividers/BetweenTextDivider';
import {OtherVariantsLogin} from '@components/OtherVariantsLogin';
import {DontHaveAccount} from '@components/DontHaveAccount';

export const LoginScreen = () => {
  return (
    <View style={{gap: 16, flex: 1}}>
      <LoginForm />
      <BetweenTextDivider label="or" />
      <OtherVariantsLogin />
      <DontHaveAccount />
    </View>
  );
};
