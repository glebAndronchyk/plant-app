import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {useMemo, useState} from 'react';
import {COLORS} from '@theme/colors.ts';
import Typography from '@theme/typography.ts';
import {StyledText} from '@styled';
import {StyledTextInputProps} from './types.ts';

const INPUT_HEIGHT = 40;
const INPUT_COLOR = COLORS.GREEN['300'];
const isIOS = Platform.OS === 'ios';

export const StyledTextInput = ({
  defaultHidden = false,
  RightIconComponent,
  errorMessage,
  ...props
}: StyledTextInputProps) => {
  const [isHidden, setIsHidden] = useState(defaultHidden);

  const hideText = () => setIsHidden(true);
  const uncoverText = () => setIsHidden(false);
  const toggleText = () => setIsHidden(!isHidden);

  const inputStyles = useMemo(() => styles(!!errorMessage), [errorMessage]);

  return (
    <View style={inputStyles.container}>
      <TextInput
        {...props}
        cursorColor={INPUT_COLOR}
        placeholderTextColor={INPUT_COLOR}
        secureTextEntry={isHidden}
        style={inputStyles.input}
      />
      {RightIconComponent && (
        <View style={inputStyles.rightIcon}>
          <RightIconComponent
            toggleText={toggleText}
            isTextHidden={isHidden}
            hideText={hideText}
            uncoverText={uncoverText}
            color={INPUT_COLOR}
          />
        </View>
      )}
      {errorMessage && (
        <StyledText style={inputStyles.errorMessage}>{errorMessage}</StyledText>
      )}
    </View>
  );
};

const styles = (withError: boolean) =>
  StyleSheet.create({
    container: {
      height: INPUT_HEIGHT,
      padding: 0,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: withError ? COLORS.SUPPORT : INPUT_COLOR,
    },
    input: {
      ...Typography.smRegular,
      color: INPUT_COLOR,
      flex: 1,
      height: INPUT_HEIGHT,
      paddingHorizontal: 12,
      position: 'relative',
      top: isIOS ? -5 : 0,
      bottom: !isIOS ? -10 : 0,
    },
    rightIcon: {
      position: 'absolute',
      right: 0,
      flex: 1,
      height: INPUT_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    errorMessage: {
      ...Typography.caption,
      position: 'absolute',
      left: 8,
      bottom: -20,
      color: COLORS.SUPPORT,
    },
  });
