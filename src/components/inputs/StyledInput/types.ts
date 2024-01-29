import {TextInputProps} from 'react-native';
import {ReactElement} from 'react';
import {VoidFn} from '@app_types/utility.ts';
import {COLORS} from '@theme/colors.ts';

export interface StyledTextInputProps
  extends Omit<
    TextInputProps,
    'cursorColor' | 'placeholderTextColor' | 'secureTextEntry' | 'style'
  > {
  defaultHidden?: boolean;
  errorMessage?: string;
  RightIconComponent?: ({
    hideText,
    uncoverText,
    toggleText,
    isTextHidden,
    color,
  }: RightIconComponentProps) => ReactElement;
}

export interface RightIconComponentProps {
  hideText: VoidFn;
  uncoverText: VoidFn;
  toggleText: VoidFn;
  isTextHidden: boolean;
  color: string;
}
