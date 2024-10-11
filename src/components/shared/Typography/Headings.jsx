import styled from 'styled-components';
import tw from 'twin.macro';

export const Heading1 = styled.h1`
  ${tw`text-2xl md:text-3xl lg:text-5xl font-orbitron mb-4 font-bold text-2xl md:text-3xl rounded-xl lg:text-5xl font-orbitron mx-10 font-semibold text-center text-[#00FFD1]  py-16  text-[#00FFD1]`}
`;

export const Heading2 = styled.h2`
  ${tw`text-base md:text-lg lg:text-xl font-orbitron mb-3 font-medium text-white`}
`;

export const LogoText = styled.h1`
  ${tw`text-[80px] xsm:text-[120px] md:text-[150px] lg:text-[170px] not-italic font-normal font-techno text-[#FFFFFFE6]`}

  text-shadow: 0px 0px 18.006px #FFFFFF66;
`;
export const SubLogoText = styled.h1`
  ${tw`text-[60px] xsm:text-[70px] md:text-[80px] lg:text-[100px] not-italic font-normal font-techno text-transparent`}

  -webkit-text-stroke: 1px #ffffffe6;
  text-shadow: none;
`;

export const LogoText2 = styled.h1`
  ${tw`xsm:text-[40px] text-[35px] tracking-widest font-techno font-semibold pt-20 md:pt-0 `}
`;
