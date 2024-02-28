import RadioGroup from 'react-native-radio-buttons-group';
import {RadioGroupProps} from 'react-native-radio-buttons-group/lib/types.ts';
import {COLORS} from '@theme/colors.ts';

interface StyledRadioGroupProps extends RadioGroupProps {}

export const StyledRadioGroup = ({
  selectedId,
  onPress,
  radioButtons,
  layout,
  ...props
}: StyledRadioGroupProps) => {
  return (
    <RadioGroup
      {...props}
      labelStyle={{color: COLORS.BLACK}}
      selectedId={selectedId}
      radioButtons={radioButtons}
      onPress={onPress}
      containerStyle={[{gap: 36}, props.containerStyle]}
      layout={layout}
    />
  );
};
