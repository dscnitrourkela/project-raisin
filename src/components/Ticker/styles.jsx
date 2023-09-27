import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const TickerContainer = styled.div`
  ${tw`
    w-full 
    overflow-hidden
    py-1
  `}
`;

export const ItemContainer = styled.div`
  ${tw`
    inline-block
    mx-12
    h-16
    mb-4
    `}
  @media (max-width: 768px) {
    margin: 0.5rem 0.5rem;
    height: 2.5rem;
  }
`;

export const TickerIcon = styled.img`
  ${tw`
    my-auto
`}
  @media (max-width: 720px) {
    width: 30px;
  }
`;
const ticker = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-200%, 0);
  }
`;
const reverseTicker = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(200%, 0);
  }
`;

export const TickerMover = styled.div`
  ${tw`
    inline-block
    whitespace-nowrap
  `}
  &:hover {
    animation-play-state: paused;
  }
  animation: ${({ reverse }) => (reverse ? reverseTicker : ticker)} 70s linear infinite;

  @media (max-width: 720px) {
    animation: ${({ reverse }) => (reverse ? reverseTicker : ticker)} 50s linear infinite;
  }
`;
