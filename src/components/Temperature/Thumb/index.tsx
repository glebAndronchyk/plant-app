import {StyleSheet, View} from 'react-native';
import {COLORS} from '@theme/colors.ts';
import {memo} from 'react';

export const Thumb = memo(() => {
  return <View style={styles.thumb} />;
});

const styles = StyleSheet.create({
  thumb: {
    width: 11,
    height: 23,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 3,
  },
});
