/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Heading2 from './Typography/Heading2';
import Body1 from './Typography/Body1';
import SectionContainer from './SectionContainer';
import Container from './Container';

const AboutContainer = styled.div`
  ${tw`
    grid
    grid-cols-2
    md:flex
    md:flex-col-reverse
    gap-12
    md:gap-5
    text-color-primary
  `}
`;
const AboutTextContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    justify-center
    col-span-1
    md:col-span-2
  `}
`;
const AboutImageContainer = styled.div`
  ${tw`
    col-span-1
    md:col-span-2
    flex
    items-center
  `}
`;

const AboutVideo = styled.iframe`
  height: 400px;
  ${tw`
  w-full
  sm:h-full
  rounded-xl
`}
`;

const AboutImage = styled.img`
  ${tw`
  h-full
  rounded-xl
`}
`;

const DesktopHeading = styled(Heading2)`
  ${tw`
    md:hidden
  `}
`;

const MobileHeading = styled(Heading2)`
  ${tw`
    hidden
    md:block
    text-center
  `}
`;

const About = ({ title, desc, image, link, alt }) => (
  <SectionContainer>
    <Container>
      <AboutContainer>
        <AboutTextContainer>
          <DesktopHeading bold>{title}</DesktopHeading>
          <Body1>{desc}</Body1>
        </AboutTextContainer>
        <AboutImageContainer>
          {!image ? (
            <AboutVideo
              src={link}
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            />
          ) : (
            <AboutImage src={link} alt={alt} />
          )}
        </AboutImageContainer>
        <MobileHeading bold>{title}</MobileHeading>
      </AboutContainer>
    </Container>
  </SectionContainer>
);

export default About;
