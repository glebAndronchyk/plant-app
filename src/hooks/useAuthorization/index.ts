import {useAppSelector} from '@store/_hooks/useAppSelector';
import {
  selectIsAuthorized,
  selectOnboardingStatus,
} from '@store/app/selectors.ts';

export const useAuthorization = () => {
  const onboardingComplete = useAppSelector(selectOnboardingStatus);
  const isAuthorized = useAppSelector(selectIsAuthorized);

  return {
    isAuthorized,
    onboardingComplete: false,
  };
};
