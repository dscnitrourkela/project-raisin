import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';

export const DescriptionCardContainer = styled.div`
  ${tw`w-full flex flex-col-reverse slg:flex-row justify-between items-center bg-transparent pl-2 pr-2 xxs:pl-4 xxs:pr-4 2xs:pl-8 2xs:pr-8 xsm:pl-12 xsm:pr-12 ssm:pl-16 ssm:pr-16 sm:pl-24 sm:pr-24`}
`;

export const DescriptionCardHeading = styled(Heading1)`
  ${tw`text-[#e0e5ed] text-2xl sm:text-3xl md:text-4xl w-full lg:text-6xl pl-0 ml-0 font-bold font-orbitron pb-2 md:pb-4 flex justify-start items-center text-left `}
`;

export const DescriptionCardInner = styled.div`
  ${tw`flex flex-col max-w-[812px] `}
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
export const DescriptionCardBottom = styled.div`
  ${tw`flex gap-10 justify-between   h-auto xsm:h-[100px] bg-white/[0.05] items-center p-5 xsm:p-10 text-xs xxxs:text-base xsm:text-2xl rounded-2xl border-[1px] border-white/[0.4]`};

  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.05);

  background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.2));
  background-size: 35px 35px;
`;
