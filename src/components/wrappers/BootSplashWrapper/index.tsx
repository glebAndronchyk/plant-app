import {PropsWithChildren, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import * as SplashAnimation from '@animations/bootSplash/splashAnimationFlow.json';
import {useBoot} from './hooks/useBoot.ts';
import {useAnimationUpdate} from './hooks/useAnimationUpdate.ts';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootSplashAnimation} from '@store/app/selectors.ts';

export const BootSplashWrapper = ({children}: PropsWithChildren) => {
  const lottieRef = useRef<LottieView>(null);
  const {frames, playing} = useAppSelector(selectBootSplashAnimation);
  const {endBootLoad, bootEnded} = useBoot(lottieRef, frames);
  const {notifyNextAnimation} = useAnimationUpdate(lottieRef, frames, playing);

  return (
    <View style={styles.wrapper}>
      <LottieView
        ref={lottieRef}
        loop={false}
        hardwareAccelerationAndroid
        style={styles.lottie}
        source={SplashAnimation}
        resizeMode="cover"
        onAnimationFinish={notifyNextAnimation}
        onAnimationLoaded={endBootLoad}
      />
      {bootEnded && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  childrenContainer: {
    position: 'relative',
    flex: 1,
    zIndex: 2,
  },
});
