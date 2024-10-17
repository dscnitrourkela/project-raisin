import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const PreviewCardContainer = styled.div`
  ${tw`w-full h-auto max-w-[280px]  xxxs:max-h-[480px] xsm:max-w-[350px] xsm:max-h-[600px] xl:max-w-[460px] xl:h-[605.6px] bg-gradient-to-b from-[#002929] to-[#22002b] rounded-lg shadow-lg border border-[#074870] flex flex-col justify-between items-center p-6 mb-16 gap-y-2`}

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.4);


  }
`;

export const PreviewCardContent = styled.div`
  ${tw`w-full max-w-[300px] xl:max-w-[380px] text-center text-white text-xs lg:text-sm font-normal font-montserrat leading-[21px] tracking-wide`}
`;

export const PreviewMoreInfoButton = styled(PrimaryButton)`
  ${tw`w-[150px]`}

  box-shadow:
    0 0 5px #ff3d7f,
    0 0 3px #ff3d7f,
    0 0 5px #ff3d7f;

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow:
      0 0 5px #ff3d7f,
      0 0 10px #ff3d7f,
      0 0 15px #ff3d7f,
      0 0 20px #ff3d7f;
  }
`;
