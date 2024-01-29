import {StyleSheet} from 'react-native';

export const containerStyles = () =>
  StyleSheet.create({
    fullScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullCentered: {
      alignSelf: 'center',
      alignItems: 'center',
      marginHorizontal: 'auto',
    },
  });
