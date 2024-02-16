import {ImageBackground, StyleSheet} from 'react-native';
import {PropsWithChildren} from 'react';
import {WeatherVariants} from '../types.ts';
import {useWeatherVariantContext} from '../WeatherVariantWrapper/hooks/useWeatherVariantContext';

const images: Record<WeatherVariants, any> = {
  sunny: require('@images/sunny-bg.png'),
  cloudy: require('@images/cloudy-bg.png'),
};

export const BackgroundWrapper = ({children}: PropsWithChildren) => {
  const {cardVariant} = useWeatherVariantContext();

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={images[cardVariant]}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 96,
  },
});
