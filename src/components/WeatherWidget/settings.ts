import {createContext} from 'react';
import {WeatherContextSignature} from '@components/WeatherWidget/types.ts';
import {COLORS} from '@theme/colors.ts';

export const WeatherVariantContext = createContext<WeatherContextSignature>({
  weatherData: null,
  styles: {text: {color: COLORS.BLACK}},
  cardVariant: 'sunny',
});
