import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';

interface LabelProps {
  text: string;
}

export const Label = ({text}: LabelProps) => {
  return (
    <StyledText style={{...Typography.md, marginBottom: 12}}>{text}</StyledText>
  );
};
