import { NavbarLink } from '@/components/shared/Typography/Links';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const NavContainer = styled.nav`
  ${tw`fixed top-0 w-full h-10 max-w-7xl p-3 mx-auto mt-4 sm:h-12 md:h-14 lg:h-16 sm:p-4 md:p-5 sm:mt-6 md:mt-7 left-[50%] z-[1000] translate-x-[-50%]`}
`;

export const NavCover = styled.div`
  ${tw`flex sm:justify-center `}
`;

export const MenuLogoItem = styled.div`
  ${tw`w-10 h-10  transition-all duration-300 cursor-pointer md:w-8 md:h-8 lg:w-11 lg:h-11 flex items-center justify-center hover:scale-110`}
  border-radius: 11.061px;
  background: rgba(255, 255, 255, 0.05);
`;

export const MainBar = styled.nav`
  backdrop-filter: blur(30px);

  ${tw`
    inline-flex items-center rounded-md border-[1.14px] border-solid border-white/[0.06] bg-white/[0.02] p-5 py-2 pr-20 justify-between  w-full max-[930px]:hidden max-w-xl md:max-w-2xl lg:max-w-4xl lg:mr-0 md:mr-[50px]
  `}
`;

export const MainBarItems = styled(NavbarLink)`
  ${tw`text-xs transition-opacity transition-transform duration-300 opacity-70 md:text-sm hover:opacity-100 hover:scale-105`}
`;

export const HamburgerContainer = styled.button`
  backdrop-filter: blur(18px);
  ${tw`min-[930px]:hidden  rounded-md bg-white/[0.02] border-[1.14px] border-solid border-white/[0.06] cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center 
  `}
`;

export const ResMen = styled.div`
  ${tw`z-10 grid w-full h-max backdrop-blur-3xl place-items-center  rounded-3xl  min-[930px]:hidden`}
`;

export const ResList = styled.ul`
  ${tw`left-0 flex flex-col items-center justify-start w-full h-full gap-10 p-8 top-5`}
`;

export const ResItem = styled.li`
  ${tw`mt-4 cursor-pointer font-montserrat`}
`;

export const HamburgerRegisterButton = styled(PrimaryButton)`
  ${tw`min-[930px]:hidden  hover:border-[2px]  hover:border-slate-500  transition-all  duration-300 `}
`;
