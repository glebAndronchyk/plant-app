import {PressableProps} from 'react-native';
import {SVGComponent} from '@app_types/svg.ts';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  LeftIcon?: SVGComponent;
  RightIcon?: SVGComponent;
  variant?: 'filled' | 'outlined';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  customIconStyles?: Record<string, unknown>;
}
