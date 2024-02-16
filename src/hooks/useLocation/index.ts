import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import {osm} from '@API';
import {OSMLocationResponse} from '@app_types/api/osm.ts';

export const useLocation = (requestMaxTime = 100_000) => {
  const [location, setLocation] = useState<
    OSMLocationResponse['address'] | null
  >(null);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: requestMaxTime,
    })
      .then(async ({latitude, longitude}) => {
        const {address} = await osm.getByLocation({
          lat: latitude,
          lon: longitude,
        });
        setLocation(address);
      })
      .catch();
  }, []);

  return {location};
};
