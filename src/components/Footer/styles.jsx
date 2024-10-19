import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1 } from '../shared/Typography/Headings';
import { PrimaryButton } from '../shared/Typography/Buttons';
import { SmallParagraph } from '../shared/Typography/Paragraphs';

export const FooterContainer = styled.div`
  ${tw`flex justify-center w-full bg-black bg-opacity-50`}
`;

export const FooterWrapper = styled.div`
  ${tw` w-full min-h-[350px] h-auto flex flex-col relative overflow-clip`}
`;

export const FooterGradient = styled.div`
  ${tw`absolute inset-0 top-[-1400px] left-[-400px] right-[-400px] llg:top-[-2000px] llg:left-[-1000px] llg:right-[-1000px] -z-10 
    `}
  background: conic-gradient(
   from 180deg,
    #1a1a1a 0%,    
    #1c4953 23%,   
    #1a1a1a 27%,
    #1a1a1a 65%,   
    #8e1e78 70%,  
    #1a1a1a 98% 
  );
`;

export const FooterTop = styled.div`
  ${tw`flex-1 w-full flex justify-center items-center px-8 xl:px-0 py-[40px] h-auto relative`}
`;

export const FooterBottom = styled.div`
  ${tw`h-auto pt-2 bg-black w-full flex items-center z-20`}
`;

export const FooterBottomContent = styled.ul`
  ${tw`py-4 sm:py-3 px-[10px] w-full flex flex-col sm:flex-row gap-[30px] sm:gap-[40px] flex-wrap sm:justify-center items-center`}
`;

export const FooterContent = styled.div`
  ${tw`flex min-h-[243px] h-auto w-full flex-col llg:flex-row llg:justify-center llg:gap-[30px] xl:gap-[50px] 2xl:gap-[140px] 2xl:px-[50px] z-20 `}
`;

export const FooterColumn1 = styled.div`
  ${tw`llg:max-w-[400px] justify-center pt-[20px]`}
`;

export const FooterColumn2 = styled.div`
  ${tw`  pt-[20px] flex justify-start llg:px-0 w-auto   `}
`;

export const FooterColumn3 = styled.div`
  ${tw`tracking-wider  flex justify-start pt-[30px] llg:pt-[20px] `}
`;
export const FooterColumn4 = styled.div`
  ${tw` flex flex-col items-center gap-[30px] pt-[50px] llg:pt-[20px] mb-auto`}
`;

export const FooterColumn1Logo = styled.div`
  ${tw`flex items-start gap-[9px] justify-center mb-[20px] llg:mb-[10px]`}
`;

export const FooterColumn1Title = styled.div`
  ${tw`flex flex-col items-end`}
`;

export const SocialImageContainer = styled.div`
  ${tw`rounded-full border-t-[3px] border-l-[2px] border-b-[1px] border-[#5A5059] w-[50px] md:w-[60px] h-[50px] md:h-[60px]  flex justify-center items-center backdrop-blur-3xl hover:brightness-200 transition-all duration-[200ms] transform hover:scale-110`}
`;

export const SocialList = styled.ul`
  ${tw` flex gap-[30px] mb-5 justify-center items-center`}
`;

export const ItemList = styled.ul`
  ${tw`flex flex-col gap-[30px]`}
`;

export const VSmallParagraph = styled.p`
  ${tw`text-[12px] xsm:text-[14px] md:text-[16px] lg:text-[14px] mb-2 text-justify text-white font-prompt font-[400] leading-[150%]`}
`;

export const FooterLogoText = styled.span`
  ${tw`text-[36px] md:text-[40px] lg:text-[50px] 2xl:text-[57px] not-italic font-normal font-techno text-[#FFFFFFE6]`}

  text-shadow: 0px 0px 18.006px #FFFFFF66;
  line-height: 1;
`;
export const FooterSubLogoText = styled.span`
  ${tw`text-[27px] md:text-[29px] lg:text-[40px] 2xl:text-[45px]  not-italic font-normal font-techno text-transparent`}

  -webkit-text-stroke: 0.5px #ffffffe6;
  text-shadow: none;
  line-height: 1;
`;

export const ListTitle = styled.li`
  ${tw`text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] tracking-wider  font-spaceX list-none `}
`;

export const Overlay = styled.div`
  ${tw`fixed top-0 left-0 bottom-0 flex justify-center bg-[#04081A]/[0.4] backdrop-blur bg-cover items-center w-full z-50`};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const Modal = styled.div`
  ${tw`pl-3 pr-3 rounded-2xl shadow-lg max-w-[400px] flex flex-col items-start gap-5 max-h-[550px] overflow-auto w-full border-[1px] pt-5 pb-5 border-[#00FFD1] bg-[#04081A]`}
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

export const ModalText = styled(Heading1)`
  ${tw`font-bold text-left text-[20px] border-none m-0 p-0`}
`;

export const ModalExit = styled(PrimaryButton)`
  ${tw`font-normal hover:scale-105 `}
`;
export const Para = styled(SmallParagraph)`
  ${tw`text-left `}
`;
