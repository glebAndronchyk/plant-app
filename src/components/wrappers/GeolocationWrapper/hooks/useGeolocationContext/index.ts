import {useContext} from 'react';
import {GeolocationContext} from '../../settings.ts';

export const useGeolocationContext = () => useContext(GeolocationContext);
