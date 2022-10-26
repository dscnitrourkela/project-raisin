import React from 'react';
import { MerchCard } from '..';
import { merch } from '../../../config/content';
import { Container, Heading2 } from '../shared';
import { MerchContainer, MerchSectionContainer } from './styles';

const MerchSection = () => (
  <MerchSectionContainer>
    <Container>
      <Heading2 bold>{merch.title}</Heading2>
      <MerchContainer>
        {merch.merchData.map(({ id, imgSrc, product, price, link }) => (
          <MerchCard key={id} imgSrc={imgSrc} product={product} price={price} link={link} />
        ))}
      </MerchContainer>
    </Container>
  </MerchSectionContainer>
);

export default MerchSection;
