import {ImageSourcePropType} from 'react-native';
import {RootStackScreenProps} from '@navigation/RootStack/types.ts';

export interface OnboardingCardSignature {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export type OnboardingScreenProps = RootStackScreenProps<'Onboarding'>;
