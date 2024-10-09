import tw, { styled } from 'twin.macro';

export const StyledParentCard = styled.div`
  ${tw`relative w-[456.74px] h-[605.44px] p-5 rounded-[22.76px] bg-[#04081A]/50 overflow-hidden shadow-[inset_0px_0.38px_0px_0px_rgba(255,255,255,0.5),0px_-1.52px_30.35px_0px_rgba(187,155,255,0.15),0px_-1.52px_7.59px_0px_rgba(233,223,255,0.3)]`}
`;

export const GradientOverlay = styled.div`
  ${tw`absolute inset-0 z-[-1] rounded-[22.76px] bg-gradient-to-r from-[#6700FF] to-[#373737] p-[1px]`}
`;

export const InnerBackground = styled.div`
  ${tw`w-full h-full bg-[#04081A] rounded-[22.76px]`}
`;
export const ChildContainer = styled.div`
  ${tw`relative z-10`}
`;
