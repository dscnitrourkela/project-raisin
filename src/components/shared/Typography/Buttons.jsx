import styled from 'styled-components';
import tw from 'twin.macro';

export const PrimaryButton = styled.button`
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);

  ${tw`px-6 py-4 text-white font-montserrat text-base not-italic font-medium flex hover:opacity-90 transition-all duration-300 cursor-pointer items-center justify-center  rounded-[11.401px] border-[1px]  leading-[140%]`}
`;

export const GreenPrimaryButton = styled.button`
  background: radial-gradient(210.3% 210.59% at 52.58% -68.5%, #23757e 30.52%, #0f4d54 53.85%);
  background-blend-mode: screen;
  ${tw`px-6 py-4 text-white font-montserrat text-base not-italic font-medium flex hover:opacity-90 transition-all duration-300 cursor-pointer items-center justify-center rounded-[11.401px] border-[1px] border-[#ffffff66] leading-[140%]`}
`;

export const SecondaryButton = styled.button`
  backdrop-filter: blur(11.075665473937988px);
  ${tw`p-4 text-[#fff] text-[16px] rounded-full font-montserrat font-medium cursor-pointer border-[0.9px] border-[#ffffff66] hover:opacity-90 transition-all duration-300 bg-[#ffffff0d]`}
`;
