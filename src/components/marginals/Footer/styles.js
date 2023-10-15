import styled from 'styled-components';
import tw from 'twin.macro';

export const InformationContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[15px]
    w-[208px]
    overflow-hidden
  `}

  @media (max-width: 890px) {
    gap: 16px;
    width: 264px;
    margin: 0 auto;
  }
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

  @media (max-width: 890px) {
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

  @media (max-width: 890px) {
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
    gap-[32px]
  `}
  @media (max-width: 890px) {
    flex-direction: column;
    gap: 24px;
  }
`;
export const QuickLinkContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[15px]
    max-w-[208px]
    overflow-hidden
  `}
  @media (max-width: 890px) {
    gap: 16px;
    max-width: 264px;
    margin: 0 auto;
  }
`;
export const LinksContainer = styled.div`
  ${tw`
    flex
    gap-[32px]
  `}
  @media (max-width: 890px) {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
`;
export const LogoAndTitleContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[16px]
    items-start
  `}
  @media (max-width: 890px) {
    align-items: center;
  }
`;
export const Logo = styled.img`
  ${tw`
      w-[40px]
      h-[40px]
    `}
`;

export const TitleText = styled.p`
  font-family: var(--font-family-stardos);
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const LinksWrapper = styled.div`
  ${tw`
        flex
        justify-between
        pb-[72px]
        border-b-[2px]
        border-solid
        border-[rgba(255, 255, 255, 0.32)]
    `}

  @media (max-width: 890px) {
    flex-direction: column;
    gap: 40px;
    padding-bottom: 40px;
    text-align: center;
  }
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
    `}
  @media (max-width: 890px) {
    gap: 24px;
  }
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
        justify-between
    `}
  @media (max-width: 890px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`;

export const FooterContainer = styled.div`
  ${tw`
        flex
        flex-col
        gap-[34px]
        w-11/12
        mx-auto
        sm:w-full
    `}
  @media (max-width: 890px) {
    gap: 24px;
    width: 80%;
  }
`;

export const FooterWrapper = styled.div`
  ${tw`
        mt-12
        w-full
        bg-background-dark
        pt-[72px]
        pb-[40px]
    `}

  @media (max-width: 890px) {
    padding-top: 24px;
    padding-bottom: 24px;
    text-align: center;
  }
`;
