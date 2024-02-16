import {OSMLocationResponse} from '@app_types/api/osm.ts';
import {getWeatherRequestLink} from '@utils/weather.ts';

export class WeatherService {
  getByQuery = async (data: OSMLocationResponse['address']) =>
    await fetch(getWeatherRequestLink(data), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
