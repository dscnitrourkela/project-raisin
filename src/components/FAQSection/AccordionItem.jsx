import React, { useState } from 'react';
import { AnswerContainer, AnswerWrap, QuestionContainer, FAQWrapper, QuestionText } from './styles';
import PlusIcon from './PlusIcon';

const AccordionItem = ({ question, answer, index }) => {
  const key = index;
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(clicked === key ? false : key);
  };

  const active = clicked === key;

  return (
    <FAQWrapper>
      <QuestionContainer onClick={handleToggle} active={active}>
        <QuestionText>{question}</QuestionText>
        <PlusIcon active={active} />
      </QuestionContainer>
      <AnswerContainer active={active}>
        <AnswerWrap>{answer}</AnswerWrap>
      </AnswerContainer>
    </FAQWrapper>
  );
};

export default AccordionItem;
