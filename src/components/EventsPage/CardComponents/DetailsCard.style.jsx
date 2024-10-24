import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import Image from 'next/image';

export const DetailsCardcontainer = styled.div`
  ${tw`flex flex-col  gap-5`}
`;

export const DescriptionCardContainer = styled.div`
  ${tw`w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-10 bg-transparent p-3 xsm:pl-12 xsm:pr-12 ssm:pl-16 ssm:pr-16 sm:pl-24 sm:pr-24 `}
`;

export const DescriptionCardHeading = styled(Heading1)`
  ${tw`text-[#e0e5ed] text-2xl sm:text-3xl md:text-4xl w-full lg:text-6xl m-0 py-0 font-bold font-orbitron text-left `}
`;

export const DescriptionCardInner = styled.div`
  ${tw`flex flex-col h-full w-full content-start lg:w-2/3 justify-center gap-6`}
`;

export const DescriptionCardContent = styled(SmallParagraph)`
  ${tw`text-white text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl  font-normal font-montserrat text-wrap  overflow-y-auto leading-normal lg:leading-10 pr-0 w-full text-left`}
`;
export const DescriptionCardBottom = styled.div`
  ${tw`flex flex-col gap-5 h-auto  rounded-xl`};

  // backdrop-filter: blur(30px);
  // background-color: rgba(255, 255, 255, 0.05);

  // background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.2));
  // background-size: 35px 35px;
`;

export const DetailsCardImage = styled(Image)`
  ${tw`w-full lg:w-1/3 aspect-[4/3] lg:aspect-[5/6]  rounded-2xl`}
`;
