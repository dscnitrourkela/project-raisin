import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';

export const DescriptionCardContainer = styled.div`
  ${tw`w-full flex flex-col-reverse slg:flex-row justify-between bg-transparent pl-2 pr-2 xxs:pl-4 xxs:pr-4 2xs:pl-8 2xs:pr-8 xsm:pl-12 xsm:pr-12 ssm:pl-16 ssm:pr-16 sm:pl-24 sm:pr-24`}
`;

export const DescriptionCardHeading = styled(Heading1)`
  ${tw`text-[#e0e5ed] text-2xl sm:text-3xl md:text-4xl w-full lg:text-6xl pl-0 ml-0 font-bold font-orbitron pb-2 md:pb-4 flex justify-start items-center text-left `}
`;

export const DescriptionCardInner = styled.div`
  ${tw`flex flex-col max-w-[812px]`}
`;

export const DescriptionCardContent = styled(SmallParagraph)`
  ${tw`text-white text-base sm:text-lg md:text-base lg:text-lg font-normal font-montserrat [word-wrap: break-word] leading-normal lg:leading-10 pr-0 mb-4 w-[350px] w-full text-left`}

  @media (min-width: 700px) {
    ${tw`w-full mb-0`}
  }

  @media (min-width: 1024px) {
    ${tw`w-full h-[332px]`}
  }

  @media (min-width: 1280px) {
    ${tw`w-full`}
  }
`;
