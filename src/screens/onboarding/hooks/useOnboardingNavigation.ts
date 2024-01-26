import {setBootSplashFrames} from '@store/app';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {AppDispatch} from '@store/_hooks/useAppDispatch';
import {OnboardingScreenProps} from '../types.ts';
import {runOnJS, useSharedValue, withTiming} from 'react-native-reanimated';

export const useOnboardingNavigation = (
  navigation: OnboardingScreenProps['navigation'],
  dispatch: AppDispatch,
) => {
  const opacity = useSharedValue(0);

  const navigateToLogin = () => {
    dispatch(
      setBootSplashFrames({
        frames: bootSplashFrames.onboardingToLogin,
        playing: false,
      }),
    );
    opacity.value = withTiming(0, {duration: 500}, () =>
      runOnJS(navigation.navigate)('Onboarding' as any),
    );
  };

  const handlePressSkip = () => {
    navigateToLogin();
  };

  return {handlePressSkip, opacity};
};
