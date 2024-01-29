import {DefaultTheme} from '@react-navigation/native';

export const authTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const unAuthorizedGroupScreenOptions = {
  headerShown: false,
  animationEnabled: false,
};
