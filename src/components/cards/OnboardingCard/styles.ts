import {StyleSheet} from 'react-native';
import {SIZES} from '@theme/sizes.ts';
import {COLORS} from '@theme/colors.ts';
import {ITEM_SIZE} from './settings.ts';

export const containers = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-around',
    height: '80%',
    width: ITEM_SIZE,
    borderRadius: SIZES.md,
    paddingVertical: SIZES['2xl'],
  },
  paginationContainer: {
    marginBottom: 16,
    paddingVertical: 0,
    gap: 3,
  },
  dot: {marginHorizontal: 0},
});

export const dot = StyleSheet.create({
  active: {
    margin: 0,
    width: 20,
    height: 10,
    borderRadius: 4,
    backgroundColor: COLORS.GREEN['300'],
  },
  inactive: {
    width: 10,
  },
});

export const onboardingStyles = StyleSheet.create({
  horizontalIntent: {
    paddingHorizontal: SIZES['6xl'] + 6,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    width: 262,
    textAlign: 'center',
    marginBottom: 8,
    minHeight: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
