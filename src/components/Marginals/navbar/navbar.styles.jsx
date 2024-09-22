import styled from 'styled-components';
import tw from 'twin.macro';

export const NavContainer = styled.nav`
  ${tw`fixed top-0 w-full h-10 max-w-6xl p-3 mx-auto mt-4 sm:h-12 md:h-14 lg:h-16 sm:p-4 md:p-5 sm:mt-6 md:mt-7 left-[50%] z-[1000] translate-x-[-50%]`}
`;

export const NavCover = styled.div`
  ${tw`flex justify-between`}
`;

export const Logos = styled.div`
  ${tw`flex mt-3.5 space-x-4 justify-evenly`}
`;

export const LogoItem = styled.div`
  ${tw`
  flex items-center justify-center bg-slate-900 w-10 h-10 border border-slate-600 shadow-[0_0_10px_#ffffff4d]  rounded-[50%]  border-solid  hover:shadow-[0_0_8px_#ffffff80]  hover:scale-110  transition-all  duration-300   ease-out
`}
`;

export const MenuLogoItem = styled.div`
  ${tw`flex items-center justify-center`}
`;
export const MainBar = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 35px;
  border-radius: 11.401px;
  border: 1.14px solid var(--Button-color, #ff3c7f);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(13.681711196899414px);

  ${tw`
    flex justify-evenly w-full max-[930px]:hidden max-w-xs md:max-w-lg lg:max-w-2xl space-x-1 rounded-md border-[0.5px] py-4 lg:mr-0 md:mr-[90px]
  `}
`;

export const MainBarItems = styled.div`
  ${tw` relative  mt-1  transition-all  duration-300  cursor-pointer  text-slate-500  hover:text-slate-200  hover:after:content-['']  hover:after:absolute  hover:after:bottom-0  hover:after:left-0  hover:after:h-px  hover:after:bg-gray-400  hover:after:w-0  hover:after:transition-all  hover:after:duration-[400ms]  hover:after:ease-in-out  hover:after:hover:w-full
  `}
`;

export const RegisterButton = styled.button`
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);
  box-shadow:
    0px 10px 149.474px 0px #ffe3697a,
    0px 0px 0.83px 3.322px #ffffff1a,
    0px -3.322px 1.661px 0px #00000040 inset,
    0px 1.661px 0.83px 0px #ffffff40 inset;

  ${tw` max-[930px]:hidden w-[150px]  h-[45px]  rounded-md  hover:border-[2px]  hover:border-slate-500  transition-all  duration-300 mt-2.5 lg:ml-0 md:ml-[-7rem]
  `}
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

  ${tw`min-[930px]:hidden w-[100px]  h-[35px]  rounded-md  hover:border-[2px]  hover:border-slate-500  transition-all  duration-300 mt-2.5 lg:ml-0 sm:mt-[100px] max-[655px]:mt-[150px]
  `}
`;
