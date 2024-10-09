import styled from 'styled-components';
import tw from 'twin.macro';

export const PrimaryButton = styled.button`
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);
  box-shadow:
    0px 10px 149.474px 0px #ffe3697a,
    0px 0px 0.83px 3.322px #ffffff1a,
    0px -3.322px 1.661px 0px #00000040 inset,
    0px 1.661px 0.83px 0px #ffffff40 inset;

  ${tw`px-6 py-4 text-white font-montserrat text-base not-italic font-medium flex hover:opacity-90 transition-all duration-300 cursor-pointer rounded-[11.401px] border-[1px] border-[#ffffff66] leading-[140%]`}
`;

export const SecondaryButton = styled.button`
  backdrop-filter: blur(11.075665473937988px);

  ${tw`p-4 text-[#fff] text-[16px] rounded-full font-montserrat font-medium cursor-pointer border-[0.9px] border-[#ffffff66] hover:opacity-90 transition-all duration-300 bg-[#ffffff0d]`}
`;
