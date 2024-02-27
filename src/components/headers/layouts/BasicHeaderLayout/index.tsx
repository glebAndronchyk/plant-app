import {headerContainerStyle} from '@theme/containers.ts';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {ReactElement} from 'react';

interface BasicHeaderLayoutProps {
  LeftContainer: ReactElement;
  RightActionIcon: ReactElement;
  onRightActionPress: () => void;
  rightActionContainerStyles: ViewStyle; // ???
}

export const BasicHeaderLayout = ({
  LeftContainer,
  RightActionIcon,
  onRightActionPress,
  rightActionContainerStyles,
}: BasicHeaderLayoutProps) => {
  return (
    <View style={headerContainerStyle}>
      <View style={styles.leftContainer}>{LeftContainer}</View>
      <Pressable
        onPress={onRightActionPress}
        style={[styles.rightAction, rightActionContainerStyles]}>
        {RightActionIcon}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {flexDirection: 'row', alignItems: 'center', gap: 8},
  imageContainer: {borderRadius: 50, overflow: 'hidden'},
  rightAction: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
