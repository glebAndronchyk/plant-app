import {Animated, GestureResponderEvent, Pressable} from 'react-native';
import {StyledText} from '@styled';
import {ButtonProps} from './types.ts';
import {
  variantsStyles,
  sizesStyles,
  defaultButtonStyles,
} from '@components/Button/styles.ts';
import Typography from '@theme/typography.ts';
import {useRef, useState} from 'react';
import {COLORS} from '@theme/colors.ts';
import {getShadowInterpolatedByRadius} from '@utils/shadows.ts';
import {animationConfig} from './settings.ts';

export const Button = ({
  label,
  LeftIcon,
  RightIcon,
  variant = 'filled',
  size = 'lg',
  ...props
}: ButtonProps) => {
  const currentVariant = variantsStyles(!!props.disabled)[variant];
  const currentSize = sizesStyles[size];
  const shadowRadiusAnimation = useRef(new Animated.Value(3)).current;
  const [currentShadowColor, setCurrentShadowColor] = useState(
    COLORS.SECONDARY,
  );

  const resetAnimationOnFinish = ({finished}: {finished: boolean}) => {
    if (finished) {
      shadowRadiusAnimation.resetAnimation();
      setCurrentShadowColor(COLORS.SECONDARY);
    }
  };

  const onPressIn = (e: GestureResponderEvent) => {
    setCurrentShadowColor(COLORS.PRIMARY);
    Animated.timing(shadowRadiusAnimation, animationConfig).start(
      resetAnimationOnFinish,
    );
    props.onPressIn && props.onPressIn(e);
  };

  return (
    <Animated.View
      style={[
        getShadowInterpolatedByRadius(
          shadowRadiusAnimation,
          currentShadowColor,
        ),
        currentVariant.wrapper,
        currentSize.wrapper,
      ]}>
      <Pressable
        {...props}
        style={[defaultButtonStyles.pressable, currentSize.pressable]}
        onPressIn={onPressIn}>
        {LeftIcon && <LeftIcon stroke={currentVariant.icon.color} />}
        <StyledText
          style={[Typography.md, currentVariant.label, currentSize.label]}>
          {label}
        </StyledText>
        {RightIcon && <RightIcon stroke={currentVariant.icon.color} />}
      </Pressable>
    </Animated.View>
  );
};
