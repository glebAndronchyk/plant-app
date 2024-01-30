import {Pressable} from 'react-native';
import CheckboxChecked from '@icons/checkbox-checked.svg';
import CheckboxNotChecked from '@icons/checkbox-not-checked.svg';
import {COLORS} from '@theme/colors.ts';
import {StyledCheckboxProps} from './types.ts';
import {useState} from 'react';

export const StyledCheckbox = ({
  onChange,
  DescriptionComponent,
}: StyledCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
    onChange(`${!checked}`);
  };

  const Icon = checked ? CheckboxChecked : CheckboxNotChecked;

  return (
    <Pressable
      onPress={toggleChecked}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        stroke={COLORS.PRIMARY}
        fill={(checked && COLORS.PRIMARY) || 'transparent'}
      />
      {DescriptionComponent && <DescriptionComponent />}
    </Pressable>
  );
};
