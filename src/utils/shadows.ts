import {Animated} from 'react-native';

export const getShadowInterpolatedByRadius = (
  radius: Animated.Value,
  color: string,
) => {
  const inputRange = [3, 6];

  return {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: color,
    shadowRadius: radius,
    shadowOpacity: radius.interpolate({
      inputRange,
      outputRange: [0.3, 0.75],
    }),
    elevation: radius.interpolate({
      inputRange,
      outputRange: [10, 20],
    }),
  };
};
