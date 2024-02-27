import RadioGroup from 'react-native-radio-buttons-group';
import {RadioGroupProps} from 'react-native-radio-buttons-group/lib/types.ts';

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
      selectedId={selectedId}
      radioButtons={radioButtons}
      onPress={onPress}
      containerStyle={[{gap: 36}, props.containerStyle]}
      layout={layout}
    />
  );
};
