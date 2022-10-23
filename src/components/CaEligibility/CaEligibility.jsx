import React from 'react';
import { caEligibility } from '../../../config/content';
import { Container, Heading2, SectionContainer } from '../shared';
import { List, ListItem } from './styles';

const CaEligibility = () => (
  <SectionContainer>
    <Container>
      <Heading2>{caEligibility.title}</Heading2>
      <List>
        {caEligibility.eligibilityRules.map(({ id, desc }) => (
          <ListItem key={id}>{desc}</ListItem>
        ))}
      </List>
    </Container>
  </SectionContainer>
);

export default CaEligibility;
