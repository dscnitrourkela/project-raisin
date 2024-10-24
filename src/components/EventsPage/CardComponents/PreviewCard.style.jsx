import tw from 'twin.macro';
import styled from 'styled-components';
import { HeroGreenPrimaryButton, HeroPrimaryButton } from '@/components/HeroSection/styles';
import Image from 'next/image';

export const PreviewCardContainer = styled.div`
  ${tw`w-full h-auto max-w-[390px] bg-gradient-to-b from-[#002929] to-[#22002b] rounded-lg shadow-lg border border-[#074870] flex flex-col justify-between items-center gap-7 md:gap-8 pl-7 pr-7 pt-5 pb-7 lg:pl-10 lg:pr-10  mb-16 xxs:ml-6 xxs:mr-6 lg:mr-0 lg:ml-0`}

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.4);

  @media (max-width: 390px) {
    ${tw`p-4`}
  }
`;

export const PreviewButtonContainer = styled.div`
  ${tw`flex justify-center gap-10 `}
`;

export const PreviewCardContent = styled.div`
  ${tw`w-full max-w-[350px] text-center text-white text-xs xsm:text-sm xl:text-base font-normal h-[100px] lg:h-[130px] overflow-y-auto font-montserrat leading-[21px] tracking-wide `}
`;

export const PreviewMoreInfoButton = styled(HeroPrimaryButton)`
  ${tw`flex justify-center items-center w-auto h-auto pl-4 pr-4 pt-2 pb-2`}

  box-shadow: 0 0 5px #ff3d7f, 0 0 3px #ff3d7f, 0 0 5px #ff3d7f;

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PreviewMoreInfoButton2 = styled(HeroGreenPrimaryButton)`
  ${tw`flex justify-center items-center w-auto h-auto p-3 `}

  box-shadow: 0 0 5px #ffffff0d, 0 0 3px #ffffff0d, 0 0 5px #ffffff0d;

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PreviewCardImage = styled(Image)`
  ${tw`w-full aspect-[5/4] rounded-2xl`}
`;
