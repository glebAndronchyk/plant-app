import {setBootSplashFrames} from '@store/app';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {AppDispatch} from '@store/_hooks/useAppDispatch';
import {OnboardingScreenProps} from '../types.ts';
import {runOnJS, useSharedValue, withTiming} from 'react-native-reanimated';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE_KEYS} from '@asyncStorage/keys.ts';

export const useOnboardingNavigation = (
  navigation: OnboardingScreenProps['navigation'],
  dispatch: AppDispatch,
) => {
  const opacity = useSharedValue(0);
  const {setItem: setOnboardingStatusToStorage} = useAsyncStorage(
    ASYNC_STORAGE_KEYS.ONBOARDING_COMPLETE,
  );

  const navigateToLogin = async () => {
    dispatch(
      setBootSplashFrames({
        frames: bootSplashFrames.onboardingToLogin,
        playing: false,
      }),
    );
    await setOnboardingStatusToStorage('true');
    opacity.value = withTiming(0, {duration: 500}, () =>
      runOnJS(navigation.navigate)('Onboarding' as any),
    );
  };

  const handlePressSkip = () => {
    navigateToLogin();
  };

  return {handlePressSkip, opacity};
};
