import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export const Blur = () => {
  return (
    <BlurView
      style={StyleSheet.absoluteFill}
      blurType="xlight"
      blurAmount={3}
    />
  );
};
