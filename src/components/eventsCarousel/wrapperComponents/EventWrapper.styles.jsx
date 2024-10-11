import tw from 'twin.macro';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${tw`w-full min-h-screen h-auto flex flex-col -mt-32 content-center `}
`;

export const SliderContainer = styled.div`
  ${tw`pb-5  overflow-x-hidden overflow-y-visible relative`}
`;

export const SwiperConatiner = styled.div`
  ${tw`flex flex-col gap-10`}
`;
