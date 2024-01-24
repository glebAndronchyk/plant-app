import {StyledText} from '@styled';
import {useEffect} from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {setBootSplashFrames} from '@store/app';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';

export const OnboardingScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setBootSplashFrames({frames: bootSplashFrames.onboarding, playing: true}),
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StyledText>Onboarding</StyledText>
    </View>
  );
};
