import styled from 'styled-components';
import tw from 'twin.macro';

export const NavContainer = styled.nav`
  ${tw`sticky w-full h-10 max-w-6xl p-3 mx-auto mt-4 sm:h-12 md:h-14 lg:h-16 sm:p-4 md:p-5 sm:mt-6 md:mt-7`}
`;

export const NavCover = styled.div`
  ${tw`flex justify-between`}
`;

export const Logos = styled.div`
  ${tw`flex mt-4 space-x-4 justify-evenly`}
`;

export const LogoItem = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(71 85 105);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

  ${tw`flex items-center justify-center bg-slate-900`}

  &:hover {
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    transition: all 0.3s ease-out;
  }
`;

export const MenuLogoItem = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const MainBar = styled.nav`
  ${tw`
  flex 
  justify-evenly 
  w-full 
  max-[693px]:hidden 
  max-w-xs 
  md:max-w-lg 
  lg:max-w-2xl 
  space-x-1 
  rounded-md 
  border 
  border-slate-500 
  border-[0.5px] 
  py-4
  bg-slate-950
  `}
`;

export const MainBarItems = styled.div`
  ${tw`transition-all duration-300 text-slate-500 hover:text-slate-200`}
`;

export const RegisterButton = styled.button`
  ${tw`
  bg-gradient-to-bl 
  max-[693px]:hidden 
  from-[#FF8DFF] 
  from-[20%] 
  via-[#FF5CA0] 
  via-[40%] 
  to-[#FF3C7F] 
  to-[80%] 
  w-[150px] 
  h-[45px] 
  rounded-md 
  hover:border-[2px] 
  hover:border-slate-500 
  transition-all 
  duration-300
  mt-1
  `}
`;

export const HamburgerContainer = styled.div`
  ${tw`min-[693px]:hidden`}
`;

export const ResponsiveMenu = styled.div`
  ${tw`
  min-[693px]:hidden 
  flex-col 
  justify-center 
  mt-4 
  space-y-4
  `}
`;
