import {useDispatch} from 'react-redux';
import {setBootSplashFrames} from '@store/app';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {useAuthStackContext} from '@navigation/RootStack/AuthStack/hooks';

export const useSplashEnd = () => {
  const dispatch = useDispatch();
  const {triggerOutAnimation} = useAuthStackContext();

  const startEndAnimation = () => {
    triggerOutAnimation?.();
    dispatch(
      setBootSplashFrames({
        frames: bootSplashFrames.authIntermediate,
        playing: false,
      }),
    );
  };

  const onEndAnimationError = () => {
    dispatch(
      setBootSplashFrames({
        frames: bootSplashFrames.login,
        playing: false,
      }),
    );
    triggerOutAnimation?.(1);
  };

  return {startEndAnimation, onEndAnimationError};
};
