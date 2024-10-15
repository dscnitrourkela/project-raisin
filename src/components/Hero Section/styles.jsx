import styled from 'styled-components';
import tw from 'twin.macro';
import { GreenPrimaryButton, PrimaryButton } from '../shared/Typography/Buttons';

export const HeroLogoText = styled.h1`
  ${tw`text-[55px] 2xs:text-[70px] sm:text-[100px] md:text-[130px] lg:text-[170px] not-italic font-normal font-techno text-[#FFFFFFE6] tracking-wider`}
`;

export const HeroSubLogoText = styled.h1`
  ${tw`text-[50px] 2xs:text-[55px] sm:text-[80px] md:text-[110px] lg:text-[150px] not-italic font-normal font-techno text-transparent`}
  -webkit-text-stroke: 1px #ffffffe6;
  text-shadow: none;
`;
export const HeroPrimaryButton = styled(PrimaryButton)`
  ${tw`px-[30px] ssm:px-[55px] py-[17px]`}
`;

export const HeroGreenPrimaryButton = styled(GreenPrimaryButton)`
  ${tw`px-[30px] ssm:px-[55px] py-[17px]`}
`;
