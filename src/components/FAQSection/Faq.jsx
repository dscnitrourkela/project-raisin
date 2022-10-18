import React, { useState } from 'react';
import { faq } from '../../../config/content';
import { Container, Heading2, SectionContainer } from '../shared';
import FaqSet from './FaqSet';
import { QuestionContainer, QuestionTextContainer } from './styles';

const Faq = () => {
  const [open, setOpen] = useState(-1);
  return (
    <SectionContainer>
      <Container>
        <Heading2>FAQ&apos;S</Heading2>
        <QuestionContainer>
          {faq.data.map(({ id, question, answer }) => (
            <QuestionTextContainer key={id}>
              <FaqSet
                openState={open}
                setOpenState={setOpen}
                idNum={id}
                question={question}
                answer={answer}
              />
            </QuestionTextContainer>
          ))}
        </QuestionContainer>
      </Container>
    </SectionContainer>
  );
};

export default Faq;
