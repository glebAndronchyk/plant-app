import {StyledText, StyledView} from '@styled';
import {shadow} from '@style/shadows.ts';

export const HomeScreen = () => {
  return (
    <StyledView
      tw="bg-white absolute top-[500] left-[25%] w-[80] h-[80] rounded-[16px]"
      style={shadow.md}>
      <StyledText>Nothing</StyledText>
    </StyledView>
  );
};
