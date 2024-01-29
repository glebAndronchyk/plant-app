import {RootNavigationProps} from '@navigation/RootStack/types.ts';
import {NavigationProp} from '@react-navigation/native';

export type AuthStackProps = RootNavigationProps<'AuthStack'>;

export type AuthStackParamList = {
  Login: undefined;
  Registration: undefined;
  PhoneConfirmation: undefined;
};

export type AuthStackNavigation = NavigationProp<AuthStackParamList>;
