import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const PreviewCardContainer = styled.div`
  ${tw`w-[456.74px] h-[605.44px] relative bg-gradient-to-b from-[#22002b] to-[#002929] rounded-[5px] shadow border border-[#074870] flex flex-col justify-between items-center pt-11 pb-8 mb-16`}
`;

export const PreviewCardImage = styled.div`
  background-image: url(${(props) => props.image});
  ${tw`w-[338px] h-[300px] rounded-[17.82px] shadow-inner flex-col justify-start items-start inline-flex bg-cover bg-center bg-no-repeat relative top-0 left-0 right-0 bottom-0`}
`;

export const PreviewCardContent = styled.div`
  ${tw`w-[321px] text-center text-[#e0e5ed]/75 text-sm font-normal font-montserrat leading-[21px] tracking-wider`}
`;

export const PreviewMoreInfoButton = styled(PrimaryButton)`
  ${tw`text-black text-lg font-normal font-share_tech`}

  &:hover {
    box-shadow:
      0 0 5px #ff3d7f,
      0 0 10px #ff3d7f,
      0 0 15px #ff3d7f;
  }
`;
