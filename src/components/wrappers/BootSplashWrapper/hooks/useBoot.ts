import {RefObject} from 'react';
import BootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';
import {Animation} from '@app_types/animation.ts';
import {authorizeUser, completeOnboarding, endBoot} from '@store/app';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootStatus} from '@store/app/selectors.ts';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {ASYNC_STORAGE_KEYS} from '@asyncStorage/keys.ts';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {user} from '@API';
import {Platform} from 'react-native';

export const useBoot = (
  lottieRef: RefObject<LottieView>,
  frames: Animation['frames'],
) => {
  const bootEnded = useAppSelector(selectBootStatus);
  const dispatch = useAppDispatch();
  const {getItem: getOnboardingStatusFromStorage} = useAsyncStorage(
    ASYNC_STORAGE_KEYS.ONBOARDING_COMPLETE,
  );

  const boot = async () => {
    await BootSplash.hide();
    lottieRef.current!.play(...frames);
    dispatch(endBoot());
  };

  const handleIOSBoot = () => setTimeout(boot, 1000);

  const onAnimationLoaded = () => {
    const promises = [user.getSession(), getOnboardingStatusFromStorage()].map(
      p => p.catch(e => e),
    );

    Promise.all(promises).then(([sessionData, onboardingStatus]) => {
      !sessionData.error &&
        !(sessionData instanceof Error) &&
        dispatch(authorizeUser());
      onboardingStatus && dispatch(completeOnboarding());

      Platform.OS === 'ios' ? handleIOSBoot() : boot();
    });
  };

  return {bootEnded, onAnimationLoaded};
};
