import {StyledText} from '@styled';
import {useState} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const onboardingAnimation = require('./assets/onboarding.json');

export const OnboardingScreen = () => {
  const [s, ssr] = useState(false);

  return (
    <>
      <LottieView
        loop={false}
        autoPlay
        style={{flex: 1}}
        source={onboardingAnimation}
        resizeMode="cover"
        renderMode="HARDWARE"
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
