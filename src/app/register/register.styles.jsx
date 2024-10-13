import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const RegisterHeading = styled(Heading1)`
  ${tw`text-center text-4xl md:text-5xl lg:text-6xl my-0 py-0 font-spaceX text-white`}
`;

export const RegisterContainer = styled.div`
  ${tw`min-h-screen flex flex-col items-center justify-center relative`};
  background: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728797925/registration_si85oa.png');
  filter: brightness(1.2);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

export const RegisterInnerContainer = styled.div`
  ${tw`w-full flex flex-col items-center justify-center gap-10 p-10 md:p-20 relative z-10`}
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(153, 153, 153, 0.03) 100%);
  backdrop-filter: blur(20px);
`;

export const RegisterForm = styled.div`
  ${tw`w-full flex flex-col gap-10 items-center justify-center`}
`;

export const RegsiterButton = styled(PrimaryButton)`
  ${tw`w-[15rem] md:w-96 mt-20`}
`;

export const Moon = styled.div`
  position: absolute;
  top: -80px;
  right: -80px;
  background: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728747927/unsplash_yOIT88xWkbg_oj7o7e.png')
    lightgray 50% / cover no-repeat;
  transform: rotate(18deg);
  filter: blur(10px) brightness(0.8);
  flex-shrink: 0;
  width: 491.622px;
  height: 491.622px;
  z-index: 1;
  border-radius: 491.622px;
`;
