import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabs: undefined;
  Onboarding: undefined;
  Login: undefined;
  Registration: undefined;
  PhoneConfirmation: undefined;
};

export type RootNavigationProps<P extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, P>;

export type WithRootNavigationProps<
  T extends Record<string, unknown>,
  P extends keyof RootStackParamList,
> = T & RootNavigationProps<P>;
