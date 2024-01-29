import {OnboardingScreenProps} from '../types.ts';
import {runOnJS, useSharedValue, withTiming} from 'react-native-reanimated';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE_KEYS} from '@asyncStorage/keys.ts';

export const useOnboardingNavigation = (
  navigation: OnboardingScreenProps['navigation'],
) => {
  const opacity = useSharedValue(0);
  const {setItem: setOnboardingStatusToStorage} = useAsyncStorage(
    ASYNC_STORAGE_KEYS.ONBOARDING_COMPLETE,
  );

  const navigateToLogin = async () => {
    await setOnboardingStatusToStorage('true');
    opacity.value = withTiming(0, {duration: 500}, () =>
      runOnJS(navigation.navigate)({
        name: 'AuthStack',
        params: {
          animationKey: 'onboardingToLogin',
          dependOnPreviousAnimation: false,
        },
      }),
    );
  };

  const handlePressSkip = () => {
    navigateToLogin();
  };

  return {handlePressSkip, opacity};
};
