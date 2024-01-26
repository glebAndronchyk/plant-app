import {RefObject, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';
import {Animation} from '@app_types/animation.ts';
import {endBoot} from '@store/app';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootStatus} from '@store/app/selectors.ts';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';

const isAndroid = Platform.OS === 'android';

export const useBoot = (
  lottieRef: RefObject<LottieView>,
  frames: Animation['frames'],
) => {
  const [bootLoad, setBootLoad] = useState(!isAndroid);
  const bootEnded = useAppSelector(selectBootStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Timer used for iphone boot screen (white flickering)
    const timerId = setTimeout(async () => {
      if (bootLoad) {
        await BootSplash.hide();
        lottieRef.current!.play(...frames);
        dispatch(endBoot());
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [bootLoad]);

  const endBootLoad = () => {
    isAndroid && setBootLoad(true);
  };

  return {bootEnded, endBootLoad};
};
