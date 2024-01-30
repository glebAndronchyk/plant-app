import {ReactElement} from 'react';

export interface StyledCheckboxProps {
  onChange: (val: string) => void;
  DescriptionComponent: () => ReactElement;
}
