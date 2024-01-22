import {FONT_WEIGHTS} from '../types/ui/typography.ts';
import {StyleSheet} from 'react-native';
import {SIZES} from './sizes.ts';

export const FONT_NUNITO: Record<FONT_WEIGHTS, string> = {
  regular: 'Nunito-Regular',
  bold: 'Nunito-Bold',
  black: 'Nunito-Black',
  medium: 'Nunito-SemiBold',
  semiBold: 'Nunito-SemiBold',
  italic: 'Nunito-Italic',
  light: 'Nunito-Light',
};

// Regular font weight and color were applied directly to StyledText component
const Typography = StyleSheet.create({
  '3xl': {
    fontSize: SIZES['3xl'],
    fontFamily: FONT_NUNITO.bold,
    lineHeight: SIZES['6xl'],
  },
  '2xl': {
    fontSize: SIZES['2xl'],
    fontFamily: FONT_NUNITO.bold,
    lineHeight: SIZES['5xl'],
  },
  xl: {
    fontSize: SIZES.xl,
    fontFamily: FONT_NUNITO.bold,
    lineHeight: SIZES['4xl'],
  },
  lg: {
    fontSize: SIZES.lg,
    fontFamily: FONT_NUNITO.bold,
    lineHeight: SIZES['3xl'],
  },
  md: {
    fontSize: SIZES.md,
    fontFamily: FONT_NUNITO.bold,
    lineHeight: SIZES['2xl'],
  },
  mdRegular: {
    fontSize: SIZES.md,
    lineHeight: SIZES['2xl'],
  },
  smRegular: {
    fontSize: SIZES.sm,
    lineHeight: SIZES['2xl'],
  },
  caption: {
    fontSize: SIZES.xs,
    lineHeight: SIZES.lg,
    letterSpacing: -0.06,
  },
});

export default Typography;
