import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterContainer = styled.div`
  ${tw`flex justify-center w-full `}
`;

export const FooterWrapper = styled.div`
  ${tw`bg-[#222020] w-full min-h-[350px] h-auto flex flex-col `}
`;

export const FooterTop = styled.div`
  ${tw`flex-1 w-full flex justify-center items-center px-8 xl:px-0 `}
`;

export const FooterBottom = styled.div`
  ${tw`h-auto pt-2 bg-black w-full flex items-center `}
`;

export const FooterContent = styled.div`
  ${tw`flex min-h-[243px] h-auto w-[1100px] flex-col md:flex-row`}
`;

export const FooterColumn1 = styled.div`
  ${tw`flex-1 pt-[30px] flex flex-col gap-[30px] order-3 md:order-1 `}
`;

export const FooterColumn2 = styled.div`
  ${tw`md:border-x-2 border-[#9A9A9A] flex-1 pt-[30px] flex justify-start md:justify-center order-1 md:order-2`}
`;

export const FooterColumn3 = styled.div`
  ${tw`tracking-wider flex-1 flex justify-start md:justify-end pt-[30px] order-2 md:order-3`}
`;

export const GetInTouch = styled.span`
  ${tw`text-4xl tracking-widest font-techno font-semibold`}
`;

export const SocialList = styled.ul`
  ${tw` flex gap-[20px] md:ml-[10px] mb-5`}
`;

export const ItemList = styled.ul`
  ${tw`flex flex-col gap-[30px]`}
`;
