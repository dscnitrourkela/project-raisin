import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading4, Body2, CaptionText } from '../shared';
import Button from '../shared/Button';

export const CardImage = styled.img`
  ${tw`
    rounded-lg 
  `};
  width: 21.25rem; 
  
  @media (max-width: 768px) {
    width: 100%; 
  }
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
  ${tw` flex items-center`}
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
export const CardContainer = styled.div`
  margin: auto;
  width: 420px;
  max-width: 400px;
  perspective: 1000px;
`;

export const Card = styled.div`
  width: min-content;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;

export const Front = styled.div`
  position: absolute;
  background-color: #2c2c2c;
  width: 400px;
  max-width: 328px;
  backface-visibility: hidden;
  ${tw`
    h-auto
    px-4
    mx-auto
    pt-4
    pb-6
    gap-4 
    rounded-2xl
    text-color-secondary
  `};
`;

export const Back = styled.div`
  width: 400px;
  max-width: 328px;
  background-color: #2c2c2c;
  ${tw`
    h-auto
    px-4
    mx-auto
    pt-4
    pb-6
    gap-4 
    rounded-2xl
    text-color-secondary
  `};
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
export const BackDescription = styled(Body2)`
  color: #b9b9b9;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 0 2rem 0;
`;
