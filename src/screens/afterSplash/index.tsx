import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

const afterSplashAnimation = require('./assets/afterSplash.json');

interface AfterSplashScreenProps {
  notifyOnAnimationFinish: () => void;
}

export const AfterSplashScreen = ({
  notifyOnAnimationFinish,
}: AfterSplashScreenProps) => {
  return (
    <LottieView
      loop={false}
      autoPlay
      style={styles.lottie}
      duration={2000}
      source={afterSplashAnimation}
      resizeMode="cover"
      renderMode="HARDWARE"
      onAnimationFinish={notifyOnAnimationFinish}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
  },
});
