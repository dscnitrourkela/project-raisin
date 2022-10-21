import React from 'react';
import { Answer, MinusIcon, PlusIcon, Question } from './styles';

const FaqSet = ({ openState, question, answer, idNum, handleClick }) => (
  <>
    <Question>{question}</Question>
    {openState === idNum ? (
      <MinusIcon onClick={() => handleClick(idNum)} />
    ) : (
      <PlusIcon onClick={() => handleClick(idNum)} />
    )}
    {openState === idNum ? <Answer>{answer}</Answer> : <></>}
  </>
);

export default FaqSet;
