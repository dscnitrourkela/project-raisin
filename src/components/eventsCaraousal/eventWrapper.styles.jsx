import tw from 'twin.macro';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${tw`w-full min-h-screen h-auto flex flex-col`}
`;

export const SliderContainer = styled.div`
  ${tw`pb-5 overflow-x-hidden overflow-y-visible relative`}
`;

// export const SliderWrapper = styled.div`
//   ${tw`flex mt-64 transition-transform`}
// `;

export const SwiperConatiner = styled.div`
  ${tw`flex flex-col gap-10`}
`;
