import tw from 'twin.macro';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${tw`w-full h-auto flex flex-col `}
`;

export const ScreenViewContainer = styled.div`
  ${tw`relative flex justify-center items-center h-auto`}
`;

export const SliderContainer = styled.div`
  ${tw`overflow-x-hidden h-auto relative`}
`;

export const SwiperConatiner = styled.div`
  ${tw`flex flex-col gap-10`}
`;
