import React, { useState } from 'react';
import { faq } from '../../../config/content';
import { Container, Heading2, SectionContainer } from '../shared';
import FaqSet from './FaqSet';
import { QuestionContainer } from './styles';

const Faq = () => {
  const [open, setOpen] = useState(-1);
  const handleClick = (id) => (open === id ? setOpen(-1) : setOpen(id));
  return (
    <SectionContainer id='faq'>
      <Container>
        <Heading2 bold>FAQ&apos;S</Heading2>
        <QuestionContainer>
          {faq.data.map(({ id, question, answer }) => (
            <FaqSet
              key={id}
              openState={open}
              idNum={id}
              question={question}
              answer={answer}
              handleClick={handleClick}
            />
          ))}
        </QuestionContainer>
      </Container>
    </SectionContainer>
  );
};

export default Faq;
