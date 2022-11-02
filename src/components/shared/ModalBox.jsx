import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  ${tw`
    h-screen
    fixed
    left-0
    top-0
    flex
    justify-center
    items-center
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-no-repeat
    bg-center
    bg-cover
    backdrop-blur-lg
  `}
  min-width: 100vw;
`;

const scaleUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const scaleDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const BackgroundContainer = styled.div`
  ${tw`
      absolute
      bg-black/50
      inset-0
      z-0
    `};
  --tw-backdrop-blur: black;
  backdrop-filter: blur(8px);
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;

const BodyContainer = styled.div`
  ${tw`
    text-center
    p-5
    flex-auto
    justify-center
  `}
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;

const ContentContainer = styled.div`
  ${tw`
    w-full
    max-w-4xl
    p-5
    relative
    mx-auto
    my-auto
    rounded-xl
    shadow-lg
    bg-background-darker
    flex
    justify-between
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    absolute
    top-5
    right-5
    m-0
    text-white
  `}
  &:hover {
    cursor: pointer;
  }
`;

const ModalBox = ({ isOpen, close, children }) => (
  <>
    {isOpen && (
      <Container>
        <BackgroundContainer onClick={close} isOpen={isOpen} />
        <BodyContainer>
          <ContentContainer id='modal-content'>
            <Icon icon={faTimes} onClick={close} />
            <div>{children}</div>
          </ContentContainer>
        </BodyContainer>
      </Container>
    )}
  </>
);

export default ModalBox;
