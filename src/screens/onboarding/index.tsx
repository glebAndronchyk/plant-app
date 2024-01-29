import {useEffect} from 'react';
import Animated, {withTiming} from 'react-native-reanimated';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {setBootSplashFrames} from '@store/app';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootSplashAnimation} from '@store/app/selectors.ts';
import {containerStyles} from '@theme/containers.ts';
import {OnboardingCard} from '@components/cards/OnboardingCard';
import {OnboardingScreenProps} from './types.ts';
import {useOnboardingNavigation} from './hooks/useOnboardingNavigation.ts';

export const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const dispatch = useAppDispatch();
  const {playing} = useAppSelector(selectBootSplashAnimation);

  const {handlePressSkip, opacity} = useOnboardingNavigation(navigation);

  useEffect(() => {
    dispatch(
      setBootSplashFrames({
        frames: bootSplashFrames.onboarding,
        playing: true,
      }),
    );
  }, []);

  useEffect(() => {
    if (!playing) {
      opacity.value = withTiming(1, {duration: 500});
    }
  }, [playing]);

  return (
    <>
      {!playing && (
        <Animated.View
          style={[containerStyles().fullScreenContainer, {opacity}]}>
          <OnboardingCard handlePressSkip={handlePressSkip} />
        </Animated.View>
      )}
    </>
  );
};
