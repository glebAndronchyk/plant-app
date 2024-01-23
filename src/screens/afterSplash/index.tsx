import {AfterSplashBase} from '@components/animated/lottie/AfterSplashBase';

interface AfterSplashScreenProps {
  notifyOnAnimationFinish: () => void;
}

export const AfterSplashScreen = ({
  notifyOnAnimationFinish,
}: AfterSplashScreenProps) => {
  return (
    <AfterSplashBase
      source={require('./assets/afterSplash.json')}
      onAnimationFinish={notifyOnAnimationFinish}
    />
  );
};
