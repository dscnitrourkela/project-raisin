/* eslint-disable max-len */
import React from 'react';
import { Heading4, LinkButton } from '../shared';
import { CardContainer, CardImage, CardTextContainer, CardTitleContainer } from './styles';

const MerchCard = ({ imgSrc, product, price, link }) => (
  <CardContainer>
    <CardImage src={imgSrc} />
    <CardTextContainer>
      <Heading4>{product}</Heading4>
      <CardTitleContainer>
        <Heading4 bold>{price} </Heading4>
        <LinkButton text='Buy' link={link} />
      </CardTitleContainer>
    </CardTextContainer>
  </CardContainer>
);

export default MerchCard;
