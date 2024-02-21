import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabs: undefined;
  Onboarding: undefined;
  AuthStack: {
    animationKey: keyof typeof bootSplashFrames;
    dependOnPreviousAnimation: boolean;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
