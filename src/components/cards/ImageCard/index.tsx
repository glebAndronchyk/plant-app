import {
  ImageBackground,
  ImageBackgroundProps,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import {PropsWithChildren} from 'react';
import {
  MEDIUM_IMAGE_CARD_SIZING,
  SMALL_IMAGE_CARD_SIZING,
} from '@theme/cards.ts';
import Animated from 'react-native-reanimated';
import {FADE_IN_500} from '@theme/animations.ts';

export interface ImageCardProps extends PropsWithChildren {
  imageSource: ImageSourcePropType;
  variant?: 'full' | 'medium' | 'small';
  containerStyle?: ImageBackgroundProps['style'];
  onPressIn?: () => void;
}

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

// children should be used with pre-built layers from ./layers directory
export const ImageCard = ({
  imageSource,
  children,
  containerStyle,
  onPressIn,
  variant = 'medium',
}: ImageCardProps) => {
  return (
    <AnimatedImageBackground
      entering={FADE_IN_500}
      resizeMode="cover"
      source={imageSource}
      style={[styles.container, styles[variant]]}>
      <Pressable
        onPressIn={onPressIn}
        style={[styles.pressable, containerStyle]}>
        {children}
      </Pressable>
    </AnimatedImageBackground>
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
  medium: MEDIUM_IMAGE_CARD_SIZING,
  full: {
    width: '100%',
  },
  small: SMALL_IMAGE_CARD_SIZING,
});
