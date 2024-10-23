import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  ${tw` w-full lg:w-[60%] pl-2 pr-2 xxs:pl-4 xxs:pr-4 2xs:pl-8 2xs:pr-8 xsm:pl-12 xsm:pr-12 ssm:pl-16 ssm:pr-16 sm:pl-20 sm:pr-20 `}
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
  ${tw`font-semibold text-xs xsm:text-lg text-gray-500`}
`;

export const StyledImage = styled(Image)`
  ${tw``}
`;
