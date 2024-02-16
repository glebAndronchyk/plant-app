import {createContext} from 'react';
import {OSMLocationResponse} from '@app_types/api/osm.ts';

export const GeolocationContext = createContext<{
  location: OSMLocationResponse['address'] | null;
}>({location: null});
