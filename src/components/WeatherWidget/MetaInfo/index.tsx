import {StyleSheet, View} from 'react-native';
import Clock from 'react-live-clock';
import {StyledText} from '@styled';
import {PropsWithChildren} from 'react';
import Typography from '@theme/typography.ts';
import {useToday} from './hooks/useToday';
import {useWeatherVariantContext} from '../WeatherVariantWrapper/hooks/useWeatherVariantContext';
import {useGeolocationContext} from '@components/wrappers/GeolocationWrapper/hooks/useGeolocationContext';

const ClockText = ({children}: PropsWithChildren) => {
  const {styles: variantStyles} = useWeatherVariantContext();

  return (
    <StyledText style={[Typography.xlRegular, variantStyles.text]}>
      {children}
    </StyledText>
  );
};

export const MetaInfo = () => {
  const today = useToday();
  const {location} = useGeolocationContext();
  const {styles: variantStyles} = useWeatherVariantContext();

  return (
    <View style={styles.container}>
      <Clock element={ClockText} ticking />
      <StyledText
        style={[Typography.smRegular, styles.todayText, variantStyles.text]}>
        {today}
      </StyledText>
      {location && (
        <StyledText
          style={[
            Typography.smRegular,
            variantStyles.text,
          ]}>{`${location.city}, ${location.country}`}</StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
  todayText: {marginBottom: 8},
});
