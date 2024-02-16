import {useEffect, useState} from 'react';
import {weather} from '@API';
import {useGeolocationContext} from '@components/wrappers/GeolocationWrapper/hooks/useGeolocationContext';
import {CurrentWeatherSignature} from '@app_types/api/weather.ts';
import {WeatherVariants} from '../../types.ts';

export const useWeather = () => {
  const [weatherData, setWeatherData] =
    useState<CurrentWeatherSignature | null>(null);
  const {location} = useGeolocationContext();

  const getWeather = async () => {
    if (location) {
      const response = await weather.getByQuery(location);
      setWeatherData(response.current);
    }
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (location) {
      if (!weatherData) {
        getWeather();
      }

      intervalId = setInterval(async () => {
        await getWeather();
      }, 1000 * 60);
    }

    return () => clearInterval(intervalId);
  }, [location]);

  return {
    weatherData,
    overallWeather: (weatherData && weatherData?.cloud > 30
      ? 'cloudy'
      : 'sunny') as WeatherVariants,
  };
};
