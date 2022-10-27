import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Body2, Heading2, Heading3 } from '../shared';

export const SectionHeading = styled(Heading2)`
  ${tw`
    text-center
    uppercase
    mb-0
  `}
`;

export const SectionSubHeading = styled(Heading3)`
  ${tw`
    text-center
    text-color-tertiary
    capitalize
  `}
`;

export const CardContainer = styled.div`
  ${tw`
    grid
    sm:grid-cols-1
    lg:grid-cols-2
    grid-cols-4
    justify-between
    mt-10
    gap-5
  `}
`;

export const Card = styled.div`
  ${tw`
    flex
    flex-col
    rounded-xl
    p-4
    bg-background-dark
    gap-1
  `}
`;

export const CardHead = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    md:gap-2
    gap-3

  `}
`;

export const CardLogo = styled(FontAwesomeIcon)`
  ${tw`
    text-color-primary
    md:h-5
    h-7
    md:w-5
    w-7
  `}
`;

export const CardBody = styled(Body2)`
  ${tw`
    text-color-tertiary
    text-center
  `}
`;
