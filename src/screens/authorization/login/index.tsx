import {View} from 'react-native';
import {LoginForm} from '@components/forms/LoginForm';
import {BetweenTextDivider} from '@components/dividers/BetweenTextDivider';
import {OtherVariantsLogin} from '@components/OtherVariantsLogin';
import {AuthorizationProposal} from '@components/AuthorizationProposal';
import {RootNavigation} from '@navigation/RootStack/types.ts';

interface LoginScreenProps {
  navigation: RootNavigation;
}

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <View style={{gap: 16, flex: 1}}>
      <LoginForm navigation={navigation} />
      <BetweenTextDivider label="or" />
      <OtherVariantsLogin />
      <AuthorizationProposal type="sign-up" />
    </View>
  );
};
