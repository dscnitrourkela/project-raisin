import styled from 'styled-components';
import tw from 'twin.macro';

export const FAQSectionContainer = styled.div`
  ${tw`
    w-[90%]
    mx-auto
  `}
`;
export const FAQWrapper = styled.div`
  ${tw`
    w-full
    border-b-2
    border-solid
    border-[#707070]
  `}
  :last-child {
    border-bottom: none;
  }
`;
export const QuestionContainer = styled.div`
  user-select: none;
  ${tw`
    pl-1
    md:pl-0
    pr-6
    mt-4
    flex
    items-center
    justify-between
    w-full
    text-color-secondary
    cursor-pointer
  `}
  color: ${(props) => (props.active ? '#91F9D3' : '#D0D0D0')};
`;

export const QuestionText = styled.p`
  ${tw`
    font-Roslindale
    text-[18px]
    sm:text-[16px]
  `}
  font-style: italic;
  font-weight: 600;
  line-height: normal;
`;
export const AnswerContainer = styled.div`
  ${tw`
    mb-4
  `}
  max-height: 0.01px;
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ active }) =>
    active &&
    ` 
      max-height: 1000px;
      opacity: 1;
    `}
`;

export const AnswerWrap = styled.div`
  ${tw`
    text-[14px]
    sm:text-[12px]
    pt-4
  `}
  color: #FFF;
  /* 360/Body/2/regular */
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const FAQGrid = styled.div`
  ${tw`
    w-full
    flex
    gap-8
    mt-4
    md:flex-col
    md:gap-0
  `}
`;

export const FAQFirstHalf = styled.div`
  ${tw`
    w-1/2
    md:w-full
  `}

  @media(min-width: 761px) {
    :last-child {
      border-bottom: none;
    }
  }
`;

export const FAQSecondHalf = styled.div`
  ${tw`
    w-1/2
    md:w-full
  `}
  :last-child {
    border-bottom: none;
  }
`;
