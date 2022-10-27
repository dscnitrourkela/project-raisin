import React from 'react';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { caWorkFlow } from '../../../config/content';
import { Container, Heading4, SectionContainer } from '../shared';
import {
  Card,
  CardBody,
  CardContainer,
  CardHead,
  CardLogo,
  SectionHeading,
  SectionSubHeading,
} from './styles';

library.add(faShareAlt);

const CaWorkFlowSection = () => (
  <SectionContainer>
    <Container>
      <SectionHeading>What will you do </SectionHeading>
      <SectionSubHeading>In Our Campus Ambassador Programme?</SectionSubHeading>
      <CardContainer>
        {caWorkFlow.workflow.map(({ id, desc }) => (
          <Card key={id}>
            <CardBody>{desc}</CardBody>
          </Card>
        ))}
      </CardContainer>
    </Container>
  </SectionContainer>
);

export default CaWorkFlowSection;
