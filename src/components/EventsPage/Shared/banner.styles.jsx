import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  ${tw`max-w-[1550px] w-full px-2  2xs:px-3 xsm:px-6 ssm:px-16 sm:px-24`}
`;

export const FlexContainer = styled.div`
  ${tw`flex gap-2 items-center text-xs xxxs:text-base xsm:text-xl rounded-2xl`}
`;

export const FlexColumnContainer = styled.div`
  ${tw`flex flex-col `}
`;

export const TextBold = styled.div`
  ${tw`font-bold `};
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;
export const TextSemiBold = styled.div`
  ${tw`font-semibold text-xs xsm:text-lg text-gray-500`}
`;

export const StyledImage = styled(Image)`
  ${tw`w-8 h-8 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px]`}
`;
