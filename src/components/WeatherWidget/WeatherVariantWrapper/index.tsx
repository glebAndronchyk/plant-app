import {useWeather} from '@components/WeatherWidget/hooks/useWeather';
import {PropsWithChildren} from 'react';
import {WeatherVariantContext} from '../settings.ts';
import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/colors.ts';

export const WeatherVariantWrapper = ({children}: PropsWithChildren) => {
  const {weatherData, overallWeather} = useWeather();

  return (
    <WeatherVariantContext.Provider
      value={{
        weatherData,
        cardVariant: overallWeather,
        styles: getStyles(overallWeather),
      }}>
      {children}
    </WeatherVariantContext.Provider>
  );
};

const getStyles = (variant: string) =>
  StyleSheet.create({
    text: {
      color: variant === 'sunny' ? COLORS.BLACK : COLORS.WHITE,
    },
  });
