import {StyledText, StyledView} from '@styled';
import {shadow} from '@style/shadows.ts';

export const HomeScreen = () => {
  return (
    <>
      <StyledView
        tw="bg-white absolute top-[500] left-[25%] w-[80] h-[80] rounded-[16px]"
        style={shadow.md}>
        <StyledText>Typography</StyledText>
      </StyledView>
      <StyledText tw="text-[28px] font-[Nunito-Regular] font-[750] text-primary leading-[42px]">
        Typography
      </StyledText>
    </>
  );
};
