import LottieView, {LottieViewProps} from 'lottie-react-native';
import {StyleSheet} from 'react-native';

interface AfterSplashBaseProps
  extends Pick<
    LottieViewProps,
    'source' | 'onAnimationFinish' | 'onAnimationLoaded'
  > {}
export const AfterSplashBase = ({
  source,
  onAnimationFinish,
  onAnimationLoaded,
}: AfterSplashBaseProps) => {
  return (
    <LottieView
      loop={false}
      autoPlay
      style={styles.lottie}
      duration={1500}
      source={source}
      resizeMode="cover"
      renderMode="HARDWARE"
      onAnimationFinish={onAnimationFinish}
      onAnimationLoaded={onAnimationLoaded}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
  },
});
