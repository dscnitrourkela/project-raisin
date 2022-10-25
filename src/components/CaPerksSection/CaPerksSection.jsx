import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { caPerks } from '../../../config/content';
import { Body1, Container, Heading2, Heading3, SectionContainer } from '../shared';

const SectionHeading = styled(Heading2)`
  ${tw`
    text-center
    uppercase
    mb-0
  `}
`;

const SectionSubHeading = styled(Heading3)`
  ${tw`
    text-center
    text-color-tertiary
    capitalize
  `}
`;

const CardContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  gap-7
  mt-10
  justify-between
  `}
`;

const Card = styled.div`
  width: 400px;
  @media (max-width: 768px) {
    min-width: 328px;
    width: 100%;
  }
  ${tw`
   h-auto
   py-8
   md:py-6
   bg-background-dark
   text-center
   sm:rounded-2xl
   lg:rounded-3xl
   rounded-4xl
 `};
`;

const CardTitle = styled(Heading3)`
  ${tw`
  mb-6
  md:mb-4
  `}
`;

const CaPerksSection = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>{caPerks.heading}</SectionHeading>
      <SectionSubHeading>{caPerks.subHeading}</SectionSubHeading>
      <CardContainer>
        {caPerks.perks.map(({ title, desc }) => (
          <Card key={title}>
            <CardTitle>{title}</CardTitle>
            <Body1>{desc}</Body1>
          </Card>
        ))}
      </CardContainer>
    </Container>
  </SectionContainer>
);

export default CaPerksSection;
