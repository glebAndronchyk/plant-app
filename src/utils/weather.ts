import {
  KEY_KW,
  QUERY_KW,
  WEATHER_API,
  WEATHER_API_KEY,
} from '@constants/weather.ts';
import {OSMLocationResponse} from '@app_types/api/osm.ts';

export const getWeatherRequestLink = (
  queryData: OSMLocationResponse['address'],
) => {
  const query = Object.values(queryData).join(' ');

  return `${WEATHER_API}?${KEY_KW}=${WEATHER_API_KEY}&${QUERY_KW}=${query}`;
};
