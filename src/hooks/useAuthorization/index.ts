import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectAppState} from '@store/app/selectors.ts';

export const useAuthorization = () => {
  const {isAuthorized, onboardingComplete} = useAppSelector(selectAppState);

  return {
    isAuthorized,
    onboardingComplete,
  };
};
