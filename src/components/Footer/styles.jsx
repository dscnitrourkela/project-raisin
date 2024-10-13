import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterContainer = styled.div`
  ${tw`flex justify-center w-full `}
`;

export const FooterWrapper = styled.div`
  ${tw` w-full min-h-[350px] h-auto flex flex-col relative overflow-clip`}
`;

export const FooterGradient = styled.div`
  ${tw`absolute inset-0 top-[-1400px] left-[-400px] right-[-400px] llg:top-[-1700px] llg:left-[-1000px] llg:right-[-1000px] -z-10 
    `}
  background: conic-gradient(
   from 180deg,
    #0B0B0B 0%,
    #0E2C33 23%, 
    #000000 30%, 
    #000000 65%, 
    #4E0E48 70%, 
    #0B0B0B 98% 
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
  ${tw`tracking-wider  flex justify-start pt-[20px] `}
`;

export const FooterColumn4 = styled.div`
  ${tw` flex flex-col items-center gap-[30px] pt-[50px] llg:pt-[20px] mb-auto`}
`;

export const FooterColumn1Logo = styled.div`
  ${tw`flex items-start gap-5 justify-center mb-[20px] llg:mb-[10px]`}
`;

export const FooterColumn1Title = styled.div`
  ${tw`flex flex-col items-end`}
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
