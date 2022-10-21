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
  max-width: 260px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
  border: 1px solid rgba(170, 170, 170, 1);
  ${tw`
    h-auto
    p-6
    rounded-4xl
    md:rounded-3xl
    cursor-pointer
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
    mt-8
    md:mt-6
    mb-6
    md:mb-2
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
  <Link to={link}>
    <CardContainer>
      <CardImage src={image} />
      <CardHeadingContainer>
        <CardHeading bold>{title}</CardHeading>
        <FontAwesomeIcon
          style={{ marginRight: 20 }}
          icon={faArrowRight}
          color=' rgba(255, 255, 255, 0.4)'
          size='2x'
        />
      </CardHeadingContainer>
      <CardDescription>{desc}</CardDescription>
    </CardContainer>
  </Link>
);

export default CategoryCard;
