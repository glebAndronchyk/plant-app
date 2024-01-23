import {PropsWithChildren, useEffect, useState} from 'react';
import {AfterSplashScreen} from '@screens/afterSplash';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectIsAuthorized} from '@store/app/selectors.ts';
import BootSplash from 'react-native-bootsplash';

export const AfterSplashWrapper = ({children}: PropsWithChildren) => {
  const [isStartUpAnimationFinished, setIsStartUpAnimationFinished] =
    useState(false);
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const notifyOnAnimationFinish = () => setIsStartUpAnimationFinished(true);

  const isLoading = !isStartUpAnimationFinished || isAuthorized === null;

  useEffect(() => {
    BootSplash.hide();
  }, []);

  return isLoading ? (
    <AfterSplashScreen notifyOnAnimationFinish={notifyOnAnimationFinish} />
  ) : (
    <>{children}</>
  );
};
