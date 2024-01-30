import {Pressable} from 'react-native';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {StyledTextInputProps} from '@components/inputs/StyledInput/types.ts';
import EyeClosedIcon from '@icons/eye-closed.svg';
import EyeIcon from '@icons/eye.svg';

interface PasswordInputProps extends StyledTextInputProps {}

export const PasswordInput = ({
  onChangeText,
  errorMessage,
  ...props
}: PasswordInputProps) => {
  return (
    <StyledTextInput
      defaultHidden
      onChangeText={onChangeText}
      errorMessage={errorMessage}
      {...props}
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
