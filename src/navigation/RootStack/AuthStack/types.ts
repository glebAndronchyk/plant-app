import {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/RootStack/types.ts';
import {ComposeProps} from '@app_types/react-navigation.ts';

export type AuthStackProps = RootStackScreenProps<'AuthStack'>;
export type AuthStackScreenProps<
  T extends keyof AuthStackParamList = keyof AuthStackParamList,
> = ComposeProps<AuthStackParamList, RootStackParamList, T>;

export type AuthStackParamList = {
  Login: undefined;
  Registration: undefined;
  PhoneConfirmation: undefined;
};
