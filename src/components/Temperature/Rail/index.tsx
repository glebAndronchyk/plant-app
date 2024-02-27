import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {RAIL_HEIGHT, settings} from '../settings.ts';
import {COLORS} from '@theme/colors.ts';
import {memo} from 'react';

export const Rail = memo(() => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.rail}>
      {Array.from({length: width / (settings.max - -settings.min)}).map(
        (_, index) => (
          <View key={index} style={styles.railDot} />
        ),
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  rail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    height: RAIL_HEIGHT,
  },
  railDot: {
    width: 1,
    height: 6,
    backgroundColor: COLORS.PRIMARY,
  },
});
