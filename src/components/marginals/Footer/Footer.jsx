import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

// Components
import Heading4 from '../../shared/Typography/Heading4';
import Body2 from '../../shared/Typography/Body2';
import { Container } from '../../shared';

// Assets
import { footer } from '../../../../config/content';

library.add(faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare, faLinkedin);

const FooterOuterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    justify-center
  `}
  box-shadow: 0 -1px 10px 2px var(--text-color-tertiary);
`;

const FooterContainer = styled.div`
  ${tw`
        grid
        grid-cols-12
        md:grid-cols-1
        gap-16
        md:gap-7
        max-w-full
        py-16
    `}
`;

const FooterLeftContainer = styled.div`
  ${tw`
    col-span-4
    text-justify
  `}
`;

const FooterLogoContainer = styled.div`
  ${tw`
    flex
    gap-4
    mb-6
    md:mb-3
  `}
`;

const FooterLogo = styled.img`
  ${tw`
  w-8
  h-8
`}
`;

const FooterDescription = styled(Body2)`
  ${tw`
    text-color-secondary
  `}
`;

const FooterCenterContainer = styled.div`
  ${tw`
    col-span-4
    flex
    justify-center
    md:justify-start
`}
`;

const FooterLocationContainer = styled.div`
  ${tw`
    mt-6
    md:mt-3
  `}
`;

const FooterLocationItem = styled.div`
  ${tw`
  flex
  mb-4
  gap-4
`}
`;

const FooterCenterSubContainer = styled.div`
  ${tw`
  text-left
`}
`;

const FooterLinkContainer = styled.div`
  ${tw`
    grid
    grid-cols-2
    md:grid-cols-3
    mt-6
    md:mt-3
    gap-x-6
    gap-y-4
  `}
`;

const FooterRightContainer = styled.div`
  ${tw`
    col-span-4
`}
`;

const IconContainer = styled.div`
  ${tw`
    flex
    justify-between
  `}
`;

const LinkText = styled(Body2)`
  ${tw`
   text-color-tertiary
  `}
  &:hover {
    ${tw`
      text-color-secondary
    `}
  }
`;

const Footer = () => (
  <FooterOuterContainer>
    <Container>
      <FooterContainer>
        <FooterLeftContainer>
          <FooterLogoContainer>
            <FooterLogo src={footer.innovision.img} alt={footer.innovision.alt} />
            <Heading4 bold>{footer.title}</Heading4>
          </FooterLogoContainer>
          <FooterDescription>{footer.desc}</FooterDescription>
        </FooterLeftContainer>
        <FooterCenterContainer>
          <FooterCenterSubContainer>
            <Heading4 bold>{footer.quicklinks.title}</Heading4>
            <FooterLinkContainer>
              {footer.quicklinks.list.map(({ link, name }) => (
                <Link key={link} to={link}>
                  <LinkText>{name}</LinkText>
                </Link>
              ))}
            </FooterLinkContainer>
          </FooterCenterSubContainer>
        </FooterCenterContainer>
        <FooterRightContainer>
          <Heading4 bold>{footer.contactTitle}</Heading4>
          <FooterLocationContainer>
            {footer.contact.map(({ link, icon, text }) => (
              <a href={link} key={link}>
                <FooterLocationItem>
                  <FontAwesomeIcon icon={icon} color=' rgba(255, 255, 255, 0.4)' size='2x' />
                  <Body2>{text}</Body2>
                </FooterLocationItem>
              </a>
            ))}
          </FooterLocationContainer>
          <IconContainer>
            {footer.socials.map(({ icon, link }) => (
              <a key={link} href={link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={icon} color=' rgba(255, 255, 255, 0.4)' size='2x' />
              </a>
            ))}
          </IconContainer>
        </FooterRightContainer>
      </FooterContainer>
    </Container>
  </FooterOuterContainer>
);

export default Footer;
