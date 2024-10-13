import { NavbarLink } from '@/components/shared/Typography/Links';
import styled from 'styled-components';
import tw from 'twin.macro';

export const NavContainer = styled.nav`
  ${tw`fixed top-0 w-full h-10 max-w-7xl p-3 mx-auto mt-4 sm:h-12 md:h-14 lg:h-16 sm:p-4 md:p-5 sm:mt-6 md:mt-7 left-[50%] z-[1000] translate-x-[-50%]`}
`;

export const NavCover = styled.div`
  ${tw`flex sm:justify-center `}
`;

export const MenuLogoItem = styled.div`
  ${tw`w-10 h-10 mr-10 transition-all duration-300 cursor-pointer md:w-8 md:h-8 lg:w-16 lg:h-10 hover:scale-110`}
`;

export const MainBar = styled.nav`
  backdrop-filter: blur(30px);

  ${tw`
    inline-flex items-center rounded-md border-[1.14px] border-solid border-white/[0.06] bg-white/[0.02] p-5 py-2 pr-20 flex justify-between  w-full max-[930px]:hidden max-w-xl md:max-w-2xl lg:max-w-4xl space-x-0.5 rounded-md border-[0.5px] py-1 lg:mr-0 md:mr-[50px]
  `}
`;

export const MainBarItems = styled(NavbarLink)`
  ${tw`text-xs transition-opacity transition-transform duration-300 opacity-70 md:text-sm hover:opacity-100 hover:scale-105`}
`;

export const HamburgerContainer = styled.div`
  ${tw`min-[930px]:hidden max-[500px]:mt-[10px] mt-[15px]`}
`;

export const ResMen = styled.div`
  backdrop-filter: blur(10px);
  ${tw`z-10 grid w-full h-max place-items-center bg-white/[0.2] rounded-3xl opacity-95 min-[930px]:hidden`}
`;

export const ResList = styled.ul`
  ${tw`left-0 flex flex-col items-center justify-start w-full h-full gap-10 p-8 top-5`}
`;

export const ResItem = styled.li`
  ${tw`mt-4 cursor-pointer`}
`;

export const HamburgerRegisterButton = styled.button`
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);
  box-shadow:
    0px 10px 149.474px 0px #ffe3697a,
    0px 0px 0.83px 3.322px #ffffff1a,
    0px -3.322px 1.661px 0px #00000040 inset,
    0px 1.661px 0.83px 0px #ffffff40 inset;

  ${tw`min-[930px]:hidden w-[100px]  h-[35px]  rounded-md  hover:border-[2px]  hover:border-slate-500  transition-all  duration-300 lg:ml-0 `}
`;
