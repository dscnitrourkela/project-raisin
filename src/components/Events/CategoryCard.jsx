import React from 'react';
import { Link } from 'gatsby';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Body2, Heading3 } from '../shared';

library.add(faArrowRight);

const rightCome = keyframes`
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const leftCome = keyframes`
  0% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 100%;
  @media (min-width: 600px) {
    max-width: 400px;
  }
  border: 1px solid rgba(170, 170, 170, 1);
  ${tw`
    h-auto
    p-6
    sxm:p-4
    rounded-xl
    cursor-pointer
  `};
  &:hover {
    transform: translateY(-20px);
    transition: all 0.1s linear;
    .left {
      animation: ${leftCome} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    .right {
      ${tw`flex`}
      animation: ${rightCome} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
`;

const CardImage = styled.img`
  ${tw`
  w-full
  rounded-lg
  `}
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

const RightArrow = styled(FontAwesomeIcon)`
  ${tw`hidden`}
  transform: scale(0);
`;

const CardDescription = styled(Body2)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${tw`
  text-justify
  `}
`;

const CategoryCard = ({ link, image, title, desc }) => (
  <Link to={link}>
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardHeadingContainer>
        <CardHeading bold className='left'>
          {title}
        </CardHeading>
        <RightArrow
          className='right'
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
