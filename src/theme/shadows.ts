import {StyleSheet} from 'react-native';
import {COLORS} from './colors.ts';

export const shadow = StyleSheet.create({
  md: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: COLORS.PRIMARY,
    shadowRadius: 6,
    shadowOpacity: 0.45,
    elevation: 6,
  },
  sm: {
    shadowColor: COLORS.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
