import {StyledText} from '@styled';
import {useState} from 'react';
import {View} from 'react-native';
import {AfterSplashBase} from '@components/animated/lottie/AfterSplashBase';

export const OnboardingScreen = () => {
  const [s, ssr] = useState(false);

  return (
    <>
      <AfterSplashBase
        source={require('./assets/onboarding.json')}
        onAnimationFinish={() => ssr(true)}
      />
      {s && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StyledText>Onboarding</StyledText>
        </View>
      )}
    </>
  );
};
