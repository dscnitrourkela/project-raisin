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
import { Body1, Container } from '../../shared';

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

const FooterOuterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    justify-center
  `}
  box-shadow: 0 0 16px 0 rgba(255, 255, 255, 0.36);

  .about-site {
    grid-column: 1/7;
    text-align: center;
    margin-bottom: 0;
    width: 100%;
    font-size: 0.9em;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid lightgrey;
    & > a {
      ${tw`inline-block`}
    }
    & > a:hover {
      ${tw`text-color-secondary`}
    }
  }
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

const FooterDescription = styled(Body1)`
  ${tw`
    text-color-tertiary
    leading-6
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
    gap-x-8
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

const FooterHeading = styled(Heading4)`
  ${tw`
    text-2xl
    2xl:text-2xl
    lg:text-2xl
    md:text-xl
    sm:text-xl`}
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
            <FooterHeading bold>{footer.quicklinks.title}</FooterHeading>
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
          <FooterHeading bold>{footer.contactTitle}</FooterHeading>
          <FooterLocationContainer>
            {footer.contact.map(({ icon, text }) => (
              <FooterLocationItem key={text}>
                <FontAwesomeIcon icon={icon} color=' rgba(255, 255, 255, 0.4)' size='lg' />
                <FooterSocialText>{text}</FooterSocialText>
              </FooterLocationItem>
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
      <Body1 className='about-site'>
        Designed and Developed with 💙 by{' '}
        <a href={footer.devLink.link} target='_blank' rel='noreferrer noopener'>
          {footer.devLink.linkText}
        </a>
      </Body1>
    </Container>
  </FooterOuterContainer>
);

export default Footer;
