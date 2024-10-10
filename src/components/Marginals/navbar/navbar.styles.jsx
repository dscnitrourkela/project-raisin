import { PrimaryButton, SecondaryButton } from '@/components/shared/Typography/Buttons';
import { NavbarLink } from '@/components/shared/Typography/Links';
import styled from 'styled-components';
import tw from 'twin.macro';

export const NavContainer = styled.nav`
  ${tw`fixed top-0 w-full h-10 max-w-[1400px] p-3 mx-auto mt-4 sm:h-12 md:h-14 lg:h-16 sm:p-4 md:p-5 sm:mt-6 md:mt-7 left-[50%] z-[1000] translate-x-[-50%]`}
`;

export const NavCover = styled.div`
  ${tw`flex justify-between lg:gap-[190px] md:gap-[120px] sm:gap-[70px]`}
`;

export const Logos = styled.div`
  ${tw`flex mt-3 space-x-4 justify-evenly`}
`;

export const LogoItem = styled(SecondaryButton)`
  ${tw`flex items-center justify-center w-10 h-10 p-0 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 hover:shadow-md border-[#ffffff05]`}

  &:hover {
    box-shadow: 0 0 8px #ffffff66 0 0 12px #ffffff4d;
  }
`;

export const MenuLogoItem = styled.div`
  ${tw`
    w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white text-[14px] rounded-full font-montserrat font-medium cursor-pointer flex justify-center items-center transition-all duration-300 hover:scale-110 hover:shadow-md
  `}
`;

export const MainBar = styled.nav`
  backdrop-filter: blur(30px);

  ${tw`
    inline-flex items-center rounded-md border-[1.14px] border-solid border-white/[0.06] bg-white/[0.02] p-2 pr-6 flex justify-between  w-full max-[930px]:hidden max-w-xs md:max-w-md lg:max-w-xl space-x-0.5 rounded-md border-[0.5px] py-1 lg:mr-0 md:mr-[50px]
  `}
`;

export const MainBarItems = styled(NavbarLink)`
  ${tw`text-xs opacity-60 md:text-sm`}
`;

export const RegisterButton = styled(PrimaryButton)`
  ${tw` max-[930px]:hidden lg:ml-0 md:ml-[-7rem]`}
`;

export const HamburgerContainer = styled.div`
  ${tw`min-[930px]:hidden max-[500px]:mt-[10px] mt-[15px]`}
`;

export const ResMen = styled.div`
  ${tw` z-10 grid w-full h-screen place-items-center bg-slate-900 opacity-95 min-[930px]:hidden`}
`;

export const ResList = styled.ul`
  ${tw`fixed top-[250px] left-0 flex flex-col items-center justify-center w-full h-full gap-10`}
`;

export const ResItem = styled.li`
  ${tw`relative mb-1 cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-px hover:after:bg-current hover:after:transition-all hover:after:duration-[400ms] hover:after:ease-in-out hover:after:w-0 hover:after:hover:w-full`}
`;

export const HamburgerRegisterButton = styled.button`
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);
  box-shadow:
    0px 10px 149.474px 0px #ffe3697a,
    0px 0px 0.83px 3.322px #ffffff1a,
    0px -3.322px 1.661px 0px #00000040 inset,
    0px 1.661px 0.83px 0px #ffffff40 inset;

  ${tw`min-[930px]:hidden w-[100px]  h-[35px]  rounded-md  hover:border-[2px]  hover:border-slate-500  transition-all  duration-300 mt-2.5 lg:ml-0 sm:mt-[100px] max-[655px]:mt-[150px]`}
`;
