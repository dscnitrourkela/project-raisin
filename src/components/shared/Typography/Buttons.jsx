import styled from 'styled-components';
import tw from 'twin.macro';

export const PrimaryButton = styled.button`
  border-radius: 11.401px;
  border: 1.14px solid rgba(255, 255, 255, 0.4);
  background: radial-gradient(219.1% 188.15% at 52.58% -68.5%, #ff8dff 30.52%, #ff3c7f 53.85%);
  box-shadow:
    0px 10px 149.474px 0px rgba(255, 227, 105, 0.48),
    0px 0px 0.83px 3.322px rgba(255, 255, 255, 0.1),
    0px -3.322px 1.661px 0px rgba(0, 0, 0, 0.25) inset,
    0px 1.661px 0.83px 0px rgba(255, 255, 255, 0.25) inset;
  display: flex;
  line-height: 140%;

  ${tw`px-6 py-4 text-white font-montserrat text-base not-italic font-medium flex text-white hover:opacity-90 transition-all duration-300 cursor-pointer`}
`;

export const SecondaryButton = styled.button`
  border: 0.923px solid #fff;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(11.075665473937988px);

  ${tw`p-4 text-[#fff] text-[16px] rounded-full font-montserrat font-medium cursor-pointer`}
`;
