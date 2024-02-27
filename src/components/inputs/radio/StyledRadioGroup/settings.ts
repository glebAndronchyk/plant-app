import {COLORS} from '@theme/colors.ts';

export const getRadioButtonProps = (id: string, label: string, value = id) => ({
  id,
  label,
  value,
  color: COLORS.PRIMARY,
  borderColor: COLORS.BLACK,
});
