import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading4, Body2, CaptionText } from '../shared';
import Button from '../shared/Button';

export const CardContainer = styled.div`
  background-color: #2c2c2c;
  width: 400px;
  max-width: 328px;
  ${tw`
    h-auto
    px-3
    mx-auto
    pt-4
    pb-6
    gap-4 
    rounded-2xl
    text-color-secondary
  `};
`;

export const CardImage = styled.img`
  ${tw`
    w-full 
    rounded-lg 
  `};
`;

export const CardTextContainer = styled.div`
  ${tw`
    mt-4 
    md:mt-3
  `}
`;

export const CardTitleContainer = styled.div`
  ${tw`
    flex-col
    items-center 
    justify-between 
    `}
`;

export const EventTimeVenue = styled(Body2)`
  ${tw`mr-2`}
`;

export const Circle = styled.div`
  ${tw`
    w-[5px]
    h-[5px] 
    mx-2
    inline-block
    bg-color-secondary
    rounded-full
  `}
`;
export const EventName = styled(Heading4)`
  text-transform: none;
  ${tw`
    mt-4
    truncate
  `}

  .dot {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const EventClub = styled(CaptionText)`
  ${tw``}
`;

export const CardButtonContainer = styled.div`
  ${tw`
    flex 
    mt-4
    justify-between
    `};
`;

export const KnowButton = styled(Button)`
  ${tw`
    px-0
    py-1.5
  `}
`;

export const EventRegisterButton = styled(Button)`
  ${tw`
    px-4
    py-1.5
  `}
`;
