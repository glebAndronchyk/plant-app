import {OnboardingCardSignature} from './types.ts';
import {ImageSourcePropType} from 'react-native';

export const OnboardingCards: OnboardingCardSignature[] = [
  {
    title: 'Create rooms',
    description:
      'personalisation and organisation of space for optimal plant cultivation',
    image:
      require('../../assets/images/onboarding/onboarding1.png') as ImageSourcePropType,
  },
  {
    title: 'Set a reminder',
    description:
      'special reminders about important aspects of care, such as watering, repotting and fertilising',
    image:
      require('../../assets/images/onboarding/onboarding2.png') as ImageSourcePropType,
  },
  {
    title: 'Diagnostic Scan',
    description:
      'diagnosing the condition of the plant, identifying the problem and receiving recommendations on the necessary care',
    image:
      require('../../assets/images/onboarding/onboarding3.png') as ImageSourcePropType,
  },
];
