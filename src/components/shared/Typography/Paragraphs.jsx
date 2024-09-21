import styled from 'styled-components';
import tw from 'twin.macro';

export const Paragraph = styled.p`
  ${tw`text-[14px] xsm:text-[18px] md:text-[20px] lg:text-[24px] mb-4 leading-[30px] xsm:leading-[40px] md:leading-[45px] lg:leading-[53px] not-italic font-medium text-white text-center font-prompt`}
`;

export const SubParagraph = styled.p`
  ${tw`text-[12px] xsm:text-[14px] md:text-[18px] lg:text-[20px] text-gray-600 mb-2 leading-relaxed text-center font-prompt`}
`;

export const SmallParagraph = styled.p`
  ${tw`text-[12px] xsm:text-[14px] md:text-[16px] lg:text-[18px] mb-2 text-center text-white font-montserrat font-[400] leading-[150%]`}
`;

export const EventCaraouselParagraph = styled.p`
  ${tw`w-[414.1px] h-[76px] font-montserrat text-[rgba(224, 229, 237, 0.75)] mt-5 text-[12.66px] font-[400] leading-[18.99px] text-left`}
`;
