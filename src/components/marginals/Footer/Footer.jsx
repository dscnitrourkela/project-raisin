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
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

// Components
import Heading4 from '../../shared/Typography/Heading4';
import Body2 from '../../shared/Typography/Body2';
import { Container } from '../../shared';

// Assets
import { footer } from '../../../../config/content';

library.add(
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faLinkedin,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
);

const FooterContainer = styled.div`
  ${tw`
        grid
        grid-cols-12
        md:grid-cols-1
        gap-16
        md:gap-7
        max-w-full
        pb-6
    `}
`;

const FooterLeftContainer = styled.div`
  ${tw`
    col-span-4
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
    gap-4
  `}
`;

const FooterSocialText = styled(Body2)`
  word-break: break-all;
`;

const Footer = () => (
  <Container>
    <FooterContainer>
      <FooterLeftContainer>
        <FooterLogoContainer>
          <FooterLogo src={footer.innovision.img} alt={footer.innovision.alt} />
          <Heading4 bold>{footer.title}</Heading4>
        </FooterLogoContainer>
        <Body2>{footer.desc}</Body2>
      </FooterLeftContainer>
      <FooterCenterContainer>
        <FooterCenterSubContainer>
          <Heading4 bold>{footer.quicklinks.title}</Heading4>
          <FooterLinkContainer>
            {footer.quicklinks.list.map(({ link, name }) => (
              <Link key={link} to={link}>
                <Body2>{name}</Body2>
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
                <FooterSocialText>{text}</FooterSocialText>
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
);

export default Footer;
