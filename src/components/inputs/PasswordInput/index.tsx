import {Pressable} from 'react-native';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {StyledTextInputProps} from '@components/inputs/StyledInput/types.ts';
import EyeClosedIcon from '@icons/eye-closed.svg';
import EyeIcon from '@icons/eye.svg';

interface PasswordInputProps
  extends Pick<
    StyledTextInputProps,
    'onChangeText' | 'errorMessage' | 'placeholder'
  > {}

export const PasswordInput = ({
  onChangeText,
  errorMessage,
  placeholder = 'Password',
}: PasswordInputProps) => {
  return (
    <StyledTextInput
      defaultHidden
      onChangeText={onChangeText}
      placeholder={placeholder}
      errorMessage={errorMessage}
      RightIconComponent={({toggleText, isTextHidden, color}) => {
        const Icon = isTextHidden ? EyeClosedIcon : EyeIcon;

        return (
          <Pressable onPress={toggleText}>
            <Icon stroke={color} />
          </Pressable>
        );
      }}
    />
  );
};
