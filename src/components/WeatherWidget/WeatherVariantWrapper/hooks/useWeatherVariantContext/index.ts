import {useContext} from 'react';
import {WeatherVariantContext} from '../../../settings.ts';

export const useWeatherVariantContext = () => useContext(WeatherVariantContext);
