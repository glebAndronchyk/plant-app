import {RefObject, useEffect} from 'react';
import {setBootSplashPlayingStatus} from '@store/app';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import LottieView from 'lottie-react-native';
import {Animation} from '@app_types/animation.ts';

export const useAnimationUpdate = (
  lottieRef: RefObject<LottieView>,
  frames: Animation['frames'],
  playing: boolean,
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (frames) {
      !playing && lottieRef.current!.play(...frames);
    }
  }, [frames, playing]);

  const notifyNextAnimation = () => {
    dispatch(setBootSplashPlayingStatus(false));
  };

  return {notifyNextAnimation};
};
