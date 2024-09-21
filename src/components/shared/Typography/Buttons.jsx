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

export const CarouselButton = styled.div`
  ${tw`flex justify-center font-share_tech items-center text-black`}
  width: 125.89px;
  height: 42.94px;
  gap: 0px;
  border-radius: 7.59px 7.59px 7.59px 7.59px;
  border-width: 0.76px 0.76px 0.76px 0.76px;
  background: rgba(255, 61, 127, 1); /* Background color */
  border: 0.76px solid rgba(137, 137, 137, 1); /* Border */
  box-shadow:
    inset 0px 2.28px 0.68px 0px rgba(255, 255, 255, 0.33),
    0px 3.03px 8.04px 0px rgba(195, 195, 195, 0.21),
    0px 0px 0.83px 3.32px rgba(255, 255, 255, 0.1),
    0px 10px 149.47px 0px rgba(255, 227, 105, 0.48),
    inset 0px 1.66px 0.83px 0px rgba(255, 255, 255, 0.25),
    inset 0px -3.32px 1.66px 0px rgba(0, 0, 0, 0.25);
`;
