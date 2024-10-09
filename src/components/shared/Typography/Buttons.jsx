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
  ${tw`flex justify-center items-center text-black font-share_tech bg-[rgba(255,61,127,1)] border-[0.76px] border-[rgba(137,137,137,1)] rounded-[7.59px] w-[125.89px] h-[42.94px] shadow-[inset_0px_2.28px_0.68px_0px_rgba(255,255,255,0.33),0px_3.03px_8.04px_0px_rgba(195,195,195,0.21),0px_0px_0.83px_3.32px_rgba(255,255,255,0.1),0px_10px_149.47px_0px_rgba(255,227,105,0.48),inset_0px_1.66px_0.83px_0px_rgba(255,255,255,0.25),inset_0px_-3.32px_1.66px_0px_rgba(0,0,0,0.25)]`}
`;
