import {RefObject, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';
import {Animation} from '@app_types/animation.ts';

const isAndroid = Platform.OS === 'android';

export const useBoot = (
  lottieRef: RefObject<LottieView>,
  frames: Animation['frames'],
) => {
  const [bootLoad, setBootLoad] = useState(!isAndroid);
  const [bootEnded, setBootEnded] = useState(false);

  useEffect(() => {
    // Timer used for iphone boot screen (white flickering)
    const timerId = setTimeout(async () => {
      if (bootLoad) {
        await BootSplash.hide();
        setBootEnded(true);
        lottieRef.current!.play(...frames);
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [bootLoad]);

  const endBootLoad = () => {
    isAndroid && setBootLoad(true);
  };

  return {bootEnded, endBootLoad};
};
