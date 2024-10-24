import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  ${tw` w-full  `}
`;

export const FlexContainer = styled.div`
  ${tw`flex gap-2 items-center text-xs xxxs:text-base xsm:text-xl rounded-2xl`}
`;

export const FlexColumnContainer = styled.div`
  ${tw`flex flex-col `}
`;

export const TextBold = styled.div`
  ${tw`font-bold `};
`;
export const TextSemiBold = styled.div`
  ${tw`font-semibold text-xs xsm:text-lg text-white/[0.8]`}
`;

export const StyledImage = styled(Image)`
  ${tw``}
`;
