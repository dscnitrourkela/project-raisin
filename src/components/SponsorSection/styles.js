import styled from 'styled-components';
import tw from 'twin.macro';

export const SponsorSectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-[90%]
    mx-auto
  `}
`;

export const TitleSponsorWrapper = styled.div`
  ${tw`
    flex
    justify-around
  `}
`;

export const TitleSponsorContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    w-[320px]
  `}
  @media (max-width: 1100px) {
    width: 240px;
  }
`;

export const TitleSponsorLogo = styled.img`
  ${tw`
    w-full
    my-auto
  `}
`;
export const SponsorText = styled.p`
  color: ${(props) => props.color || '#D0D0D0'};

  font-family:
    Noto Sans,
    sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  width: 100%;
  @media (max-width: 1100px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const SponsorWrapper = styled.div`
  ${tw`
      grid
      grid-cols-3
      gap-[79px]
  `}
  row-gap: 42px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 42px;
    justify-content: space-between;
    row-gap: 32px;
  }
  @media (max-width: 280px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    justify-content: space-between;
  }
`;

export const SponsorContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[20px]
    text-center
    w-[320px]
    col-span-1
    mx-auto
    items-center
    mt-[42px]
  `}
  @media (max-width: 780px) {
    width: 240px;
    margin-top: 32px;
    gap: 6px;
  }

  @media (max-width: 580px) {
    width: 120px;
    margin-top: 32px;
  }
`;

export const SponsorLogo = styled.img`
  ${tw`
    h-full
  `}
`;
