import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';

export const DescriptionCardContainer = styled.div`
  ${tw`flex flex-col justify-between items-start bg-transparent `}
`;

export const DescriptionCardHeading = styled(Heading1)`
  ${tw`text-[#e0e5ed] text-[64px] font-bold font-orbitron pt-0 pb-0 ml-0`}
`;

export const DescriptionCardInner = styled.div`
  ${tw`flex items-center justify-between `}
`;

export const DescriptionCardContent = styled(SmallParagraph)`
  ${tw`w-[812px] max-h-[332px] text-white text-[32px] font-normal font-montserrat [word-wrap: break-word] leading-10 text-left`}
`;
export const DescriptionCardImage = styled.div`
  background-image: url(${(props) => props.image});
  ${tw`w-[416px] h-[458px] rounded-[17.82px] shadow  flex-col justify-start items-start inline-flex ml-2`}
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
`;
