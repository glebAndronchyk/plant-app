import {Image, StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {useWeatherVariantContext} from '../WeatherVariantWrapper/hooks/useWeatherVariantContext';

export const WeatherInfo = () => {
  const {weatherData, styles: variantStyles} = useWeatherVariantContext();

  return (
    <View style={styles.container}>
      {weatherData ? (
        <>
          <View style={styles.weatherInfo}>
            <Image
              source={{
                uri: 'https://' + weatherData.condition.icon.replace('//', ''),
              }}
              width={24}
              height={24}
            />
            <StyledText style={[Typography.md, variantStyles.text]}>
              {weatherData.condition.text}
            </StyledText>
          </View>
          <StyledText style={[Typography['5xlRegular'], variantStyles.text]}>
            {Math.ceil(weatherData.temp_c)}°
          </StyledText>
        </>
      ) : (
        <View style={styles.empty} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: 82, gap: 8},
  empty: {height: 10, width: '100%'},
  weatherInfo: {
    flexDirection: 'row',
    gap: 4,
  },
});
