/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Heading2 from './Typography/Heading2';
import Body1 from './Typography/Body1';
import about from '../../../config/content/About';
import SectionContainer from './SectionContainer';
import Container from './Container';

const AboutContainer = styled.div`
  ${tw`
    grid
    grid-cols-2
    md:grid-rows-2
    gap-7
    md:gap-4
    text-color-primary
  `}
`;
const AboutTextContainer = styled.div`
  ${tw`
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

const AboutImage = styled.iframe`
  ${tw`
  w-full
  h-full
  rounded-xl
`}
`;

const About = () => (
  <SectionContainer>
    <Container>
      <AboutContainer>
        <AboutTextContainer>
          <Heading2 bold>{about.title}</Heading2>
          <Body1>{about.desc}</Body1>
        </AboutTextContainer>
        <AboutImageContainer>
          <AboutImage
            src={about.link}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </AboutImageContainer>
      </AboutContainer>
    </Container>
  </SectionContainer>
);

export default About;
