import React from 'react';
import { Link } from 'gatsby';
import {
  InformationContainer,
  InformationListContainer,
  InformationName,
  InformationTitle,
  InformationValue,
  InformationWrapper,
  LinksContainer,
  Logo,
  QuickLinkContainer,
  LogoAndTitleContainer,
  TitleText,
  LinksWrapper,
  DevText,
  SocialsContainer,
  SocialIcon,
  DevAndSocialContainer,
  FooterContainer,
  FooterWrapper,
} from './styles';

import FooterData from '../../../../config/content/Footer';

const { logo, title, information, quicklinks, developers, socials } = FooterData;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <LinksWrapper>
        <LogoAndTitleContainer>
          <Logo src={logo.img} alt={logo.alt} />
          <TitleText>{title}</TitleText>
        </LogoAndTitleContainer>
        <LinksContainer>
          <QuickLinkContainer>
            <InformationTitle>{quicklinks.title}</InformationTitle>
            <InformationListContainer>
              {quicklinks.list.map(({ id, name, link }) => (
                <InformationName style={{ cursor: 'pointer' }} key={id}>
                  <Link to={link}>{name}</Link>
                </InformationName>
              ))}
            </InformationListContainer>
          </QuickLinkContainer>
          <InformationWrapper>
            {information.map((item) => (
              <InformationContainer key={item.id}>
                <InformationTitle>{item.infoTitle}</InformationTitle>
                <InformationListContainer>
                  {item.list.map(({ idx, infoName, info }) => (
                    <InformationName key={idx}>
                      {infoName}
                      <span>{': '}</span>
                      <InformationValue>{info}</InformationValue>
                    </InformationName>
                  ))}
                </InformationListContainer>
              </InformationContainer>
            ))}
          </InformationWrapper>
        </LinksContainer>
      </LinksWrapper>
      <DevAndSocialContainer>
        <Link to={developers.link} target='_blank' rel='noreferrer noopener'>
          <DevText>{developers.text}</DevText>
        </Link>
        <SocialsContainer>
          {socials.map(({ id, icon, alt, link }) => (
            <a href={link} key={id} target='_blank' rel='noreferrer noopener'>
              <SocialIcon src={icon} alt={alt} />
            </a>
          ))}
        </SocialsContainer>
      </DevAndSocialContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
