import {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useEffect} from 'react';
import {SkeletonProps} from '../types.ts';
import {COLORS} from '@theme/colors.ts';

const START = 0.3;
const END = 1;

export const Skeleton = ({
  width,
  height,
  duration = 1500,
  style,
}: SkeletonProps) => {
  const opacity = useSharedValue(START);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(withTiming(END, {duration}), withTiming(START, {duration})),
      -1,
    );
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {opacity, width, height, backgroundColor: COLORS.GRAY.dark},
      ]}
    />
  );
};
