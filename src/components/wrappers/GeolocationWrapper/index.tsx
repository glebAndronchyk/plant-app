import {useLocation} from '@hooks/useLocation';
import {PropsWithChildren} from 'react';
import {GeolocationContext} from '@components/wrappers/GeolocationWrapper/settings.ts';

export const GeolocationWrapper = ({children}: PropsWithChildren) => {
  const {location} = useLocation();

  return (
    <GeolocationContext.Provider value={{location}}>
      {children}
    </GeolocationContext.Provider>
  );
};
