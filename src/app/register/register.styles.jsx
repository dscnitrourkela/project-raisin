import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1, Heading2 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const RegisterHeading = styled(Heading1)`
  ${tw`text-center text-2xl xxs:text-3xl ssm:text-4xl md:text-5xl lg:text-6xl my-0 py-0 font-spaceX text-white`}
`;

export const PaymentContainer = styled.div`
  ${tw`w-auto h-auto p-5 border-[#00FFD1] border-2`}
`;
export const PaymentHeading = styled(Heading2)`
  ${tw`text-left`}
`;

export const RegisterContainer = styled.div`
  ${tw`min-h-screen flex flex-col items-center w-full justify-center pt-20 pb-16 px-2 xxs:px-5 xsm:px-10 md:px-20`};
  background: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728797925/registration_si85oa.png');
  filter: brightness(1.1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;
export const RegisterInnerContainer = styled.div`
  ${tw`w-full grid place-items-center gap-10 py-10 md:py-20 px-1 xxxs:px-3 xxs:px-5 xsm:px-10`}
  border-radius: 12px;
  background-image: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728798262/grad2_mcspr0.png'),
    url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728797925/registration_si85oa.png');
  background-size: cover, cover;
  background-position: center, center;
  background-blend-mode: overlay;
  backdrop-filter: blur(10px);
  filter: brightness(0.85);
  z-index: 2;
`;

export const RegisterForm = styled.div`
  ${tw`w-full flex flex-col gap-10 items-center justify-center`}
`;

export const RegsiterButton = styled(PrimaryButton)`
  ${tw`w-[15rem] md:w-96 mt-20`}
`;

export const Moon = styled.div`
  position: absolute;
  background: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728747927/unsplash_yOIT88xWkbg_oj7o7e.png')
    lightgray 50% / cover no-repeat;
  transform: rotate(18deg);
  filter: blur(10px) brightness(0.9);
  flex-shrink: 0;
  z-index: 5;
  border-radius: 450px;
  ${tw` top-[-50px] right-[-50px] ssm:top-[-100px] ssm:right-[-100px] w-[150px] xsm:w-[200px] h-[150px] xsm:h-[200px] ssm:w-[250px] ssm:h-[250px] md:w-[300px]  md:h-[300px] slg:w-[350px] slg:h-[350px] llg:w-[400px] llg:h-[400px] xl:w-[450px]  xl:h-[450px]`}
`;

export const UndertakingLink = styled.a`
  ${tw`text-base font-prompt font-semibold  hover:underline transition-all duration-200 ease-in-out`}
`;

export const PaymentPolicyInfo = styled.div`
  ${tw`text-base font-prompt font-semibold  hover:underline transition-all duration-200 ease-in-out text-center`}
`;
