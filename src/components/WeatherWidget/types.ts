import {CurrentWeatherSignature} from '@app_types/api/weather.ts';

export type WeatherVariants = 'cloudy' | 'sunny';
export interface WeatherContextSignature {
  weatherData: CurrentWeatherSignature | null;
  cardVariant: WeatherVariants;
  styles: {text: {color: string}}; // TODO fix this
}
