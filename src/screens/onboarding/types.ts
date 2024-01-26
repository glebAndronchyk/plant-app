import {ImageSourcePropType} from 'react-native';
import {RootNavigationProps} from '@navigation/types.ts';

export interface OnboardingCardSignature {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export interface OnboardingScreenProps
  extends Pick<RootNavigationProps<'Onboarding'>, 'navigation'> {}
