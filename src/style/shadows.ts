import {StyleSheet} from 'react-native';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
const primaryColor = fullConfig!.theme!.colors!.primary as string;
const secondaryColor = (fullConfig!.theme!.colors!.green as object)[
  '300' as keyof object
] as string;

export const shadow = StyleSheet.create({
  md: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: primaryColor,
    shadowRadius: 6,
    shadowOpacity: 0.45,
    elevation: 6,
  },
  sm: {
    shadowColor: secondaryColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
