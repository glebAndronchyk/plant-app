import {PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {unAuthorizeUser} from '@store/app';

export const UserAuthorizationWrapper = ({children}: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(unAuthorizeUser());
  }, []);

  return <>{children}</>;
};
