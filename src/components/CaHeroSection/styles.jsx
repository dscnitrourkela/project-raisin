import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading2 } from '../shared';

export const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
    pt-[100px]
    lg:pt-[90px]
    sm:pt-[70px]
  `}
`;

export const HeroContainer = styled.div`
  ${tw`
    grid
    grid-cols-5
    md:grid-cols-1
    items-center
    gap-4
  `}
`;

export const HeroTextContainer = styled.div`
  ${tw`
    col-span-2
    flex
    flex-col
    items-start
    gap-6
    text-color-primary
    sxm:items-center
    sxm:text-center
  `}/* &>.btn {
    ${tw`
      sxm:mt-3
    `}
  } */
`;

export const HeroHeading = styled(Heading2)`
  ${tw`
    sxm:mb-0
  `}
`;

export const FlexContainer = styled.div`
  ${tw`
    grid
    grid-cols-3
    w-3/4
    sxm:w-full
    md:w-3/4
    lg:w-full
    mt-10
    md:mt-5
    items-end
    gap-5
  `}
`;

export const FlexCard = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;

export const FlexLogo = styled.img`
  ${tw`
    h-1/2
    object-contain
    mb-3
  `}
`;

export const HeroImageContainer = styled.div`
  ${tw`
    md:hidden
    col-span-3
    flex
    justify-end
  `}
`;

export const HeroImageContain = styled.div`
  background: radial-gradient(46.72% 46.72% at 50% 50%, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  ${tw`
    flex
    h-[520px]
    w-[520px]
    lg:h-[360px]
    lg:w-[360px]
    lg:p-10
    p-16
    justify-center
    relative
  `}
`;

export const HeroImage = styled.img`
  ${tw`
    h-full
    object-contain
  `}
`;
