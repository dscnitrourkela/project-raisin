import React from 'react';
import { Answer, PlusIcon, Question, QuestionTextContainer } from './styles';

const FaqSet = ({ openState, question, answer, idNum, handleClick }) => (
  <>
    <QuestionTextContainer onClick={() => handleClick(idNum)}>
      <Question className={`question ${openState === idNum ? 'active' : ''}`} open={openState}>
        {question}
      </Question>
      <PlusIcon
        className={`question ${openState === idNum ? 'active open' : ''}`}
        onClick={() => handleClick(idNum)}
      >
        +
      </PlusIcon>
    </QuestionTextContainer>
    {openState === idNum ? <Answer isOpen={openState === idNum}>{answer}</Answer> : <></>}
  </>
);

export default FaqSet;
