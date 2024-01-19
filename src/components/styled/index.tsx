import {Text} from 'react-native';
import {TextProps} from 'react-native/Libraries/Text/Text';
import {FONT_NUNITO} from '@theme/typography';
import {SIZES} from '@theme/sizes';
import {COLORS} from '@theme/colors';

export const StyledText = ({children, ...props}: TextProps) => (
  <Text
    {...props}
    style={[
      {
        fontFamily: FONT_NUNITO.regular,
        fontSize: SIZES.md,
        color: COLORS.BLACK,
      },
      props.style,
    ]}>
    {children}
  </Text>
);
