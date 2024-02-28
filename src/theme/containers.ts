import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/colors.ts';

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
    listContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      gap: 16,
    },
    marginContainer: {
      marginHorizontal: 16,
    },
    paddingContainer: {
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
  });

export const headerContainerStyle = StyleSheet.compose(
  containerStyles().paddingContainer,
  {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: COLORS.WHITE,
  },
);
