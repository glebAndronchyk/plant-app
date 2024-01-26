import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectOnboardingStatus} from '@store/app/selectors.ts';

export const useAuthorization = () => {
  const onboardingComplete = useAppSelector(selectOnboardingStatus);

  return {
    isAuthorized: false,
    onboardingComplete,
  };
};
