import {Platform, StyleSheet} from 'react-native';
import {COLORS} from './colors.ts';

export const shadow = StyleSheet.create({
  md: {
    shadowColor: COLORS.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  sm: {
    shadowColor: Platform.OS === 'ios' ? COLORS.SECONDARY : COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
