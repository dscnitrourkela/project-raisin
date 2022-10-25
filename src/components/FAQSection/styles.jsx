import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Body1 } from '../shared';

export const QuestionContainer = styled.div`
  ${tw`
    flex
    flex-col
    my-10
  `}
  &:last-child {
    border-bottom: 1px solid var(--text-color-primary);
  }
`;

export const QuestionTextContainer = styled.div`
  border-top: 1px solid var(--text-color-primary);
  ${tw`
    grid
    grid-cols-12
    justify-between
    items-center
    py-3
    gap-y-2
  `}
`;

export const Question = styled(Body1)`
  ${tw`
    col-span-11
    border-2
    border-color-primary
    cursor-pointer
  `}
`;

export const PlusIcon = styled.p`
  &::before {
    content: '+';
  }
  user-select: none;
  ${tw`
    flex
    justify-end
    cursor-pointer
    text-4xl
    text-color-primary
    duration-100
  `}
`;

export const MinusIcon = styled(PlusIcon)`
  &::before {
    content: '-';
  }
`;

const scaleUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-25%);
  }
`;

const scaleDown = keyframes`
  0% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const Answer = styled(Body1)`
  flex: auto;
  user-select: none;
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  ${tw`
    col-span-12
    duration-200
  `}
`;
