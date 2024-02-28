import {NavigationProp} from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Blog: undefined;
  Diagnostics: undefined;
  AddRoom: undefined;
};

export type HomeNavigation = NavigationProp<HomeStackParamList>;
