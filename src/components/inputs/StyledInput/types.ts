import {ReactElement} from 'react';
import {VoidFn} from '@app_types/utility.ts';
import {NamesValues} from '@constants/fieldNames.ts';
import {TextInputMaskProps} from 'react-native-text-input-mask';

export interface StyledTextInputProps
  extends Omit<
    TextInputMaskProps,
    | 'cursorColor'
    | 'placeholderTextColor'
    | 'secureTextEntry'
    | 'style'
    | 'onChangeText'
  > {
  disabled?: boolean;
  defaultHidden?: boolean;
  errorMessage?: string | false;
  label?: string;
  RightIconComponent?: ({
    hideText,
    uncoverText,
    toggleText,
    isTextHidden,
    color,
  }: RightIconComponentProps) => ReactElement;
  name?: NamesValues;
  onChangeText: (e: string | React.ChangeEvent<any>) => void;
  valueUsage?: 'formatted' | 'extracted';
}

export interface RightIconComponentProps {
  hideText: VoidFn;
  uncoverText: VoidFn;
  toggleText: VoidFn;
  isTextHidden: boolean;
  color: string;
}
