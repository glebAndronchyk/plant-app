import {
  ImageBackground,
  ImageBackgroundProps,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import {PropsWithChildren} from 'react';

export interface ImageCardProps extends PropsWithChildren {
  imageSource: ImageSourcePropType;
  variant?: 'full' | 'medium' | 'small';
  containerStyle?: ImageBackgroundProps['style'];
  onPressIn?: () => void;
}

// children should be used with pre-built layers from ./layers directory
export const ImageCard = ({
  imageSource,
  children,
  containerStyle,
  onPressIn,
  variant = 'medium',
}: ImageCardProps) => {
  return (
    <ImageBackground
      source={imageSource}
      style={[styles.container, styles[variant]]}>
      <Pressable
        onPressIn={onPressIn}
        style={[styles.pressable, containerStyle]}>
        {children}
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  pressable: {
    padding: 8,
    flex: 1,
  },
  medium: {
    width: 171,
    height: 171,
  },
  full: {
    width: '100%',
  },
  small: {
    width: 109,
    height: 99,
  },
});
