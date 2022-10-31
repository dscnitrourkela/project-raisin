import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { navigate } from 'gatsby';
import tw from 'twin.macro';
import { hero } from '../../../config/content';
import { AuthContext } from '../../utils/Auth';
import { LinkButton } from '../shared';

const rotating = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const ContentContainer = styled.div`
  ${tw`flex flex-col items-center gap-16 md:mt-6`}
`;

const HeroImageOuterContainer = styled.div`
  ${tw`flex flex-col gap-5 `}
`;

const HeroImageContainer = styled.div`
  ${tw`flex justify-center max-w-full gap-4 mx-auto `}
  .round {
    animation: ${rotating} 6s linear infinite;
  }
`;

const HeroImageSpecial = styled.img`
  ${tw`
    1xsm:h-[140px]
    2xsm:h-[100px]
    object-contain
  `}
`;

const HeroImage = styled.img`
  ${tw`object-contain max-w-full `}
`;

const HeroDates = styled.h3`
  ${tw`flex text-4xl font-bold md:text-2xl text-color-primary`}
`;

const HeroContent = () => {
  const authContext = useContext(AuthContext);
  const [text, setText] = useState('Register');
  const { login, user } = authContext;

  const onRegisterClick = () => {
    if (user) {
      navigate('/register');
    } else {
      login();
    }
  };

  useEffect(() => {
    if (!user) {
      setText('Register');
    } else {
      setText('Registration Details');
    }
  }, [user]);

  return (
    <ContentContainer>
      <HeroImageOuterContainer>
        <HeroImageContainer>
          <HeroImageSpecial src={hero.mainText.left.src} alt={hero.mainText.left.alt} />
          <HeroImageSpecial
            className='round'
            src={hero.mainText.right.src}
            alt={hero.mainText.right.alt}
          />
        </HeroImageContainer>
        <HeroImage src={hero.mainText.src} alt={hero.mainText.alt} />
      </HeroImageOuterContainer>
      <HeroDates>{hero.date}</HeroDates>
      <LinkButton method={onRegisterClick} text={text} />
      {/* <AuthButton paddingY='18px' paddingX='64px' text={hero.register.btnText} /> */}
    </ContentContainer>
  );
};

export default HeroContent;
