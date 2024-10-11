import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import { Heading2 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';

export const CarouselButton = styled(PrimaryButton)`
  ${tw` w-[125.89px] h-[42.94px] flex justify-center items-center text-black font-share_tech rounded-[7.59px] `}
`;

export const CarouselHead = styled(Heading2)`
  ${tw`font-bold `}
`;

export const CarouselParagraph = styled(SmallParagraph)`
  ${tw`max-w-[414.1px] h-[76px] font-montserrat text-[rgba(224, 229, 237, 0.75)]  mt-5 text-[12.66px] font-[400] leading-[18.99px] text-left flex text-wrap max-w-[500px]`}
`;

export const Overlay = styled.div`
  ${tw`fixed top-0 left-0 bottom-0 flex justify-center bg-[#04081A]/[0.4] backdrop-blur bg-cover items-center w-full z-50`};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const Modal = styled.div`
  ${tw` p-6 rounded-2xl shadow-lg max-w-[400px] w-full border-[1px] border-[#00FFD1] bg-[#04081A]`}
  transition: transform 0.3s ease, opacity 0.3s ease;
`;
