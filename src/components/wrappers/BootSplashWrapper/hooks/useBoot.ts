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
import {forkJoin, from, timer} from 'rxjs';

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

  const handleIOSBoot = () => timer(1000).subscribe(boot);

  const onAnimationLoaded = () => {
    const session$ = from(user.getSession());
    const onboardingStatus$ = from(getOnboardingStatusFromStorage());

    forkJoin([session$, onboardingStatus$]).subscribe(
      ([sessionResponse, onboardingStatus]) => {
        if (!sessionResponse.error && sessionResponse.data.session) {
          dispatch(authorizeUser());
        }

        if (onboardingStatus) {
          dispatch(completeOnboarding());
        }

        Platform.OS === 'ios' ? handleIOSBoot() : boot();
      },
    );
  };

  return {bootEnded, onAnimationLoaded};
};
