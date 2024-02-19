import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '@theme/colors.ts';

export interface ActionLayerProps {
  iconLeftSource: ImageSourcePropType;
  iconRightSource: ImageSourcePropType;
  style: ViewStyle;
}

const Icon = ({source}: {source: ImageSourcePropType}) => {
  return (
    <View style={styles.icon}>
      <Image source={source} />
    </View>
  );
};

export const ActionLayer = ({
  iconLeftSource,
  iconRightSource,
  style,
}: ActionLayerProps) => {
  return (
    <View style={[styles.container, style]}>
      <Icon source={iconLeftSource} />
      <Icon source={iconRightSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
