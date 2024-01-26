import {RefObject} from 'react';
import BootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';
import {Animation} from '@app_types/animation.ts';
import {completeOnboarding, endBoot} from '@store/app';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootStatus} from '@store/app/selectors.ts';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {ASYNC_STORAGE_KEYS} from '@asyncStorage/keys.ts';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const useBoot = (
  lottieRef: RefObject<LottieView>,
  frames: Animation['frames'],
) => {
  const bootEnded = useAppSelector(selectBootStatus);
  const dispatch = useAppDispatch();
  const {getItem: getOnboardingStatusFromStorage} = useAsyncStorage(
    ASYNC_STORAGE_KEYS.ONBOARDING_COMPLETE,
  );

  const onAnimationLoaded = () => {
    getOnboardingStatusFromStorage().then(result => {
      result && dispatch(completeOnboarding());
      // Timer used for iphone boot screen (white flickering)
      setTimeout(async () => {
        await BootSplash.hide();
        lottieRef.current!.play(...frames);
        dispatch(endBoot());
      }, 1000);
    });
  };

  return {bootEnded, onAnimationLoaded};
};
