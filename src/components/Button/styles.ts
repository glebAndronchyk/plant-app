import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/colors.ts';
import {ButtonProps} from '@components/Button/types.ts';
import {SIZES} from '@theme/sizes.ts';
import Typography from '@theme/typography.ts';

export const defaultButtonStyles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    flex: 1,
  },
});

export const variantsStyles = (disabled: boolean) => ({
  filled: StyleSheet.create({
    wrapper: {
      backgroundColor: disabled ? COLORS.GREEN['300'] : COLORS.PRIMARY,
    },
    label: {
      color: COLORS.WHITE,
    },
    icon: {
      color: COLORS.WHITE,
    },
  }),
  outlined: StyleSheet.create({
    wrapper: {
      backgroundColor: COLORS.WHITE,
    },
    label: {
      color: disabled ? COLORS.GREEN['300'] : COLORS.BLACK,
    },
    icon: {
      color: disabled ? COLORS.GREEN['300'] : COLORS.PRIMARY,
    },
  }),
});

export const sizesStyles: Record<
  NonNullable<ButtonProps['size']>,
  ReturnType<typeof StyleSheet.create>
> = {
  lg: StyleSheet.create({
    pressable: {
      width: '100%',
      paddingVertical: 8,
    },
    wrapper: {borderRadius: SIZES.md},
    label: {
      ...Typography.md,
      fontSize: SIZES.sm,
    },
  }),
  md: StyleSheet.create({
    pressable: {
      paddingVertical: 8,
      paddingHorizontal: 32,
    },
    wrapper: {borderRadius: SIZES.md},
    label: {
      ...Typography.md,
    },
  }),
  sm: StyleSheet.create({
    pressable: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    wrapper: {borderRadius: 8},
    label: {
      ...Typography.md,
    },
  }),
  xs: StyleSheet.create({
    pressable: {
      paddingHorizontal: 8,
      borderRadius: 8,
    },
    wrapper: {borderRadius: 8},
    label: {
      ...Typography.caption,
    },
  }),
};
