import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { Body1, Body2 } from '../shared';

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
    flex
    justify-between
    items-center
    py-3
    gap-y-2
    cursor-pointer
  `}
  &:hover {
    .question {
      ${tw`
        text-color-secondary
      `}
    }
  }
  & > .active {
    ${tw`
      text-color-secondary
    `}
  }
`;

export const Question = styled(Body1)`
  user-select: none;
  color: ${(props) => (props.open ? 'var(--text-color-primary)' : 'var(--text-color-tertiary)')};
  ${tw`
    flex
    border-2
    border-color-primary
    text-color-tertiary
    cursor-pointer
  `}
`;

export const PlusIcon = styled.p`
  user-select: none;
  ${tw`
    flex
    justify-end
    cursor-pointer
    text-4xl
    text-color-tertiary
    duration-100
  `}
  /* transition: 1s linear ease-in-out; */
  &.open {
    transform: rotate(45deg);
    transition: 3s linear ease-in-out;
  }
`;

export const MinusIcon = styled(PlusIcon)`
  transform: rotate(45deg);
  transition: all 0.2s linear;
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

export const Answer = styled(Body2)`
  flex: auto;
  user-select: none;
  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  ${tw`
    text-color-secondary
    col-span-12
    duration-200
    pb-3
  `}
`;
