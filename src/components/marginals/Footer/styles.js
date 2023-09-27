import styled from 'styled-components';
import tw from 'twin.macro';

export const InformationContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[15px]
    md:gap-[16px]
    w-[208px]
    md:w-[264px]
    overflow-hidden
    md:mx-auto
  `}
`;
export const InformationTitle = styled.p`
  ${tw`
    font-Inter
  `}
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const InformationListContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[8px]
    text-[#fff]
  `}
`;
export const InformationName = styled.p`
  ${tw`
    font-Inter
  `}
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 760px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;
export const InformationValue = styled.span`
  ${tw`
    text-color-secondary
  `}
`;

export const InformationWrapper = styled.div`
  ${tw`
    flex
    md:flex-col
    gap-[32px]
    md:gap-[24px]
  `}
`;
export const QuickLinkContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[15px]
    md:gap-[16px]
    max-w-[208px]
    md:max-w-[264px]
    overflow-hidden
    md:mx-auto
  `}
`;
export const LinksContainer = styled.div`
  ${tw`
    flex
    md:flex-col
    gap-[32px]
    md:gap-[24px]
    md:text-center
  `}
`;
export const LogoAndTitleContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[16px]
    items-start
    md:items-center
  `}
`;
export const Logo = styled.img`
  ${tw`
      w-[40px]
      h-[40px]
    `}
`;

export const TitleText = styled.p`
  ${tw`
    font-Roslindale
  `}
  color: #FFF;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const LinksWrapper = styled.div`
  ${tw`
        flex
        md:flex-col
        justify-between
        md:gap-[40px]
        pb-[72px]
        md:pb-[40px]
        border-b-[2px]
        border-solid
        border-[rgba(255, 255, 255, 0.32)]
        md:text-center
    `}
`;
export const DevText = styled.p`
  ${tw`
      font-Inter
    `}
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.32px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const SocialsContainer = styled.div`
  ${tw`
        flex
        gap-[32px]
        md:gap-[24px]
    `}
`;

export const SocialIcon = styled.img`
  ${tw`
        w-[24px]
        h-[24px]
    `}
`;

export const DevAndSocialContainer = styled.div`
  ${tw`
        w-full
        flex
        md:flex-col
        justify-between
        md:items-center
        md:gap-[16px]
    `}
`;

export const FooterContainer = styled.div`
  ${tw`
        flex
        flex-col
        gap-[34px]
        md:gap-[24px]
        w-[92%]
        md:w-[80%]
        mx-auto
        sm:w-full
    `}
`;

export const FooterWrapper = styled.div`
  ${tw`
        w-full
        bg-background-dark
        pt-[72px]
        md:pt-[24px]
        pb-[40px]
        md:pb-[24px]
        md:text-center
    `}
`;
