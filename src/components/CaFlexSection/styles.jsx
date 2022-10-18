import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading3, Heading4 } from '../shared';

export const BackgroundContainer = styled.div`
  ${tw`
    w-full
    text-color-primary
    bg-background-dark
    py-12
    `}
`;

export const FlexHeading = styled(Heading4)`
  ${tw`
    text-center
  `}
`;

export const FlexTagLine = styled(Heading3)`
  ${tw`
    mt-8
    text-center
  `}
`;
