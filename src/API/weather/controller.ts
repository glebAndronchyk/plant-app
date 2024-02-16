import {WeatherService} from './service.ts';
import {OSMLocationResponse} from '@app_types/api/osm.ts';
import {WeatherResponse} from '@app_types/api/weather.ts';

export class WeatherController {
  constructor(private service: WeatherService) {}
  getByQuery = async (data: OSMLocationResponse['address']) => {
    const response = await this.service.getByQuery(data);

    return (await response.json()) as WeatherResponse;
  };
}
