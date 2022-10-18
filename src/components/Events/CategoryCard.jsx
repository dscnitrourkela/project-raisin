import React from 'react';
import { Link } from 'gatsby';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body2, Heading3 } from '../shared';

library.add(faArrowRight);

const CardContainer = styled.div`
  width: 400px;
  min-width: 260px;
  @media (min-width: 768px) {
    min-width: 400px;
  }
  border: 1px solid rgba(170, 170, 170, 1);
  ${tw`
    h-auto
    p-6
  `};
`;

const CardImage = styled.img`
  ${tw`w-full`}
`;

const CardHeadingContainer = styled(Link)`
  ${tw`
    flex
    gap-4
    items-center
    justify-center
    my-8
  `}
`;

const CardHeading = styled(Heading3)`
  ${tw`
    text-center
    uppercase
  `}
`;

const CardDescription = styled(Body2)`
  ${tw`
  text-justify
  `}
`;

const CategoryCard = ({ link, image, title, desc }) => (
  <CardContainer>
    <CardImage src={image} />
    <Link to={link}>
      <CardHeadingContainer>
        <CardHeading>{title}</CardHeading>
        <FontAwesomeIcon
          style={{ marginRight: 20 }}
          icon={faArrowRight}
          color=' rgba(255, 255, 255, 0.4)'
          size='2x'
        />
      </CardHeadingContainer>
    </Link>
    <CardDescription>{desc}</CardDescription>
  </CardContainer>
);

export default CategoryCard;
