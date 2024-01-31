import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {useCallback, useMemo, useState} from 'react';
import {COLORS} from '@theme/colors.ts';
import Typography from '@theme/typography.ts';
import {StyledText} from '@styled';
import {StyledTextInputProps} from './types.ts';
import {placeholders} from '@constants/fieldNames.ts';
import TextInputMask from 'react-native-text-input-mask';

const INPUT_HEIGHT = 40;
const INPUT_COLOR = COLORS.GREEN['300'];
const isIOS = Platform.OS === 'ios';

export const StyledTextInput = ({
  defaultHidden = false,
  RightIconComponent,
  errorMessage,
  name,
  mask = '',
  onChangeText,
  valueUsage = 'formatted',
  ...props
}: StyledTextInputProps) => {
  const [isHidden, setIsHidden] = useState(defaultHidden);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const hideText = () => setIsHidden(true);
  const uncoverText = () => setIsHidden(false);
  const toggleText = () => setIsHidden(!isHidden);
  const onFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      handleFocus();
      props.onFocus && props.onFocus(e);
    },
    [],
  );
  const onBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      handleBlur();
      props.onBlur && props.onBlur(e);
    },
    [],
  );
  const handleTextChange = (formatted?: string, extracted?: string) => {
    onChangeText &&
      onChangeText(
        (valueUsage === 'formatted' ? formatted : extracted) as string,
      );
  };

  const inputStyles = useMemo(
    () => styles(!!errorMessage, isFocused),
    [errorMessage, isFocused],
  );
  const placeholder = props.placeholder || placeholders[name || ''];

  return (
    <View style={inputStyles.container}>
      <TextInputMask
        {...props}
        onChangeText={handleTextChange}
        mask={mask}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        cursorColor={INPUT_COLOR}
        placeholderTextColor={
          isFocused || !!errorMessage ? COLORS.BLACK : INPUT_COLOR
        }
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

const resolveInputStyles = (withError: boolean, isFocused: boolean) => {
  const styles = {
    borderColor: INPUT_COLOR,
    textColor: INPUT_COLOR,
    borderWidth: 1,
  };

  if (withError || isFocused) {
    styles.textColor = COLORS.BLACK;
    styles.borderWidth = 2;
  }

  if (isFocused) {
    styles.borderColor = COLORS.PRIMARY;
  }

  if (withError) {
    styles.borderColor = COLORS.SUPPORT;
  }

  return styles;
};

const styles = (withError: boolean, isFocused: boolean) => {
  const resolvedStyles = resolveInputStyles(withError, isFocused);

  return StyleSheet.create({
    container: {
      height: INPUT_HEIGHT,
      padding: 0,
      borderWidth: resolvedStyles.borderWidth,
      borderRadius: 8,
      borderColor: resolvedStyles.borderColor,
      backgroundColor: COLORS.WHITE,
    },
    input: {
      ...Typography.smRegular,
      color: resolvedStyles.textColor,
      flex: 1,
      height: INPUT_HEIGHT,
      paddingHorizontal: 12,
      top: isIOS ? -7 : 'auto',
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
};
