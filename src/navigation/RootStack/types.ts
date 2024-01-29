import {StackScreenProps} from '@react-navigation/stack';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTabs: undefined;
  Onboarding: undefined;
  AuthStack: {
    animationKey: keyof typeof bootSplashFrames;
    dependOnPreviousAnimation: boolean;
  };
};

export type RootNavigation = NavigationProp<RootStackParamList>;

export type RootNavigationProps<P extends keyof RootStackParamList = any> =
  StackScreenProps<RootStackParamList, P>;

export type WithRootNavigationProps<
  T extends Record<string, unknown>,
  P extends keyof RootStackParamList,
> = T & RootNavigationProps<P>;
