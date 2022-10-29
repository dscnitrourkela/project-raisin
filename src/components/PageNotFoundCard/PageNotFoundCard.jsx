import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading3, Heading4 } from '../shared';
import { pageNotFound } from '../../../config/content';

const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
    pt-[100px]
    lg:pt-[90px]
    sm:pt-[70px]
  `}
`;

const LottieContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    gap-24
  `}
`;

const LottieImg = styled.img`
  ${tw`
    max-w-[467px]
    w-full
    object-contain
  `}
`;

const TextContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    text-center
    gap-4
  `}
`;

const PageNotFoundCard = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 8000);
  }, []);

  return (
    <SectionContainer>
      <Container>
        <LottieContainer>
          <LottieImg src={pageNotFound.lottie.imgSrc} alt={pageNotFound.lottie.alt} />
          <TextContainer>
            <Heading3 bold>{pageNotFound.heading}</Heading3>
            <Heading4>{pageNotFound.subHeading}</Heading4>
          </TextContainer>
        </LottieContainer>
      </Container>
    </SectionContainer>
  );
};

export default PageNotFoundCard;
