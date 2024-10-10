import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterContainer = styled.div`
  ${tw`flex justify-center w-full `}
`;

export const FooterWrapper = styled.div`
  ${tw`bg-[#222020] w-full min-h-[350px] h-auto flex flex-col `}
`;

export const FooterTopBackground = styled.div`
  ${tw`h-auto inset-0 opacity-40 bg-[url('https://res.cloudinary.com/dpmlrxlzr/image/upload/v1727151375/image_15_benmmg.svg')] bg-cover bg-center absolute `}
`;

export const FooterTopGradient = styled.div`
  ${tw`h-auto inset-0 z-10 absolute opacity-90 `}
  background: linear-gradient(
    to bottom right, 
    #000000, 
    #0b132e88 55%,
    #000000 80% 
  );
`;

export const FooterTop = styled.div`
  ${tw`flex-1 w-full flex justify-center items-center px-8 xl:px-0 py-[40px] h-auto relative`}
`;

export const FooterBottom = styled.div`
  ${tw`h-auto pt-2 bg-black w-full flex items-center `}
`;

export const FooterBottomContent = styled.ul`
  ${tw`py-4 sm:py-3 w-full flex flex-col sm:flex-row gap-[30px] sm:gap-[40px] flex-wrap sm:justify-center items-center`}
`;

export const FooterContent = styled.div`
  ${tw`flex min-h-[243px] h-auto w-[1100px] flex-col md:flex-row z-20`}
`;

export const FooterColumn1 = styled.div`
  ${tw`flex-1 pt-[30px] flex flex-col gap-[30px] order-3 md:order-1 `}
`;

export const FooterColumn2 = styled.div`
  ${tw`md:border-x-3 border-[#9A9A9A] flex-1 pt-[30px] flex justify-start md:justify-center lg:px-0 md:px-[30px] order-1 md:order-2`}
`;

export const FooterColumn3 = styled.div`
  ${tw`tracking-wider flex-1 flex justify-start md:justify-end pt-[30px] order-2 md:order-3`}
`;

export const SocialList = styled.ul`
  ${tw` flex gap-[30px] lg:ml-[25px] mb-5`}
`;

export const ItemList = styled.ul`
  ${tw`flex flex-col gap-[30px]`}
`;
