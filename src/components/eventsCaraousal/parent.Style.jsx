import tw, { styled } from 'twin.macro';

export const StyledParentCard = styled.div`
  ${tw`relative w-[456.74px] h-[605.44px] p-5 rounded-[22.76px] bg-[#04081A]/[0.5] overflow-hidden`}
  box-shadow: inset 0px 0.38px 0px 0px #ffffff80, 0px -1.52px 30.35px 0px #bb9bff26, 0px -1.52px 7.59px 0px #e9dfff4d;
`;

export const GradientOverlay = styled.div`
  ${tw`absolute inset-0 z-[-1] rounded-[22.76px] bg-gradient-to-r from-[#6700FF] to-[#373737] p-[1px]`}
`;

export const InnerBackground = styled.div`
  ${tw`w-full h-full bg-[#04081A] rounded-[22.76px]`}
`;
