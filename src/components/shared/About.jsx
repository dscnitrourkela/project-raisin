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
    md:grid-rows-2
    gap-7
    md:gap-4
    text-color-primary
  `}
`;
const AboutTextContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
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

const About = ({ title, desc, image, link, alt }) => (
  <SectionContainer>
    <Container>
      <AboutContainer>
        <AboutTextContainer>
          <Heading2 bold>{title}</Heading2>
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
      </AboutContainer>
    </Container>
  </SectionContainer>
);

export default About;
