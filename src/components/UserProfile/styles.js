import styled from 'styled-components';
import tw from 'twin.macro';

export const DetailWrapper = styled.div`
  ${tw`
    w-[90%]
    mx-[auto]
  `}
`;
export const DetailContainer = styled.div`
  ${tw`
    px-[32px]
    py-[42px]
    bg-background-dark
    rounded-[16px]
    grid
    grid-cols-3
    sm:grid-cols-1
    gap-6
    mt-[36px]
    mb-[48px]
  `}
`;

export const RegEventContainer = styled.div`
  ${tw`
    grid
    grid-cols-3
    gap-[20px]
    mt-[36px]
    mx-auto
  `}

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RegEventCard = styled.div`
  ${tw`
    h-[176px]
    min-w-[342px]
    bg-background-dark
    rounded-[16px]
    px-[16px]
    pt-[16px]
    pb-[24px]
    flex
    gap-[8px]
  `}

  @media (max-width: 300px) {
    min-width: 250px;
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;
export const RegEventImage = styled.img`
  ${tw`
    w-[39%]
    aspect-square
    rounded-[3px]
  `}
  object-fit: fill;
  @media (max-width: 300px) {
    width: 80%;
  }
`;

export const RegEventDetails = styled.div`
  ${tw`
    w-[56%]
    flex
    flex-col
    gap-[20px]
    justify-between
  `}

  @media (max-width: 300px) {
    width: 80%;
    text-align: center;
  }
`;

export const RegEventDate = styled.div`
  ${tw`
    flex
    gap-[8px]
    text-[16px]
    text-color-secondary
  `}
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.32px;

  @media (max-width: 300px) {
    margin: 0 auto;
  }
`;

export const Circle = styled.div`
  ${tw`
    w-[5px]
    h-[5px]
    bg-color-secondary
    border-[1px]
    border-solid
    border-color-secondary
    rounded-full
    my-auto
  `}
`;

export const RegEventName = styled.div`
  ${tw`
    flex
    flex-col
    gap-[4px]
  `}
`;
export const RegEventTitle = styled.div`
  ${tw`
    font-Roslindale
    text-color-primary
    text-[24px]
    italic
    font-[600]
  `}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: normal;
  letter-spacing: 0.48px;
`;
export const RegEventClubname = styled.p`
  ${tw`
    text-color-tertiary
    text-[14px]
    font-[500]
  `}
  font-family: Noto Sans, sans-serif;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const RegEventKnowMore = styled.div`
  ${tw`
      cursor-pointer
  `}
  color: #FFF;
  font-family:
    Noto Sans,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
