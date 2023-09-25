import React from 'react';
import AccordionItem from './AccordionItem';
import FAQ from '../../../config/content/FAQ';
import { FAQSectionContainer, FAQGrid, FAQFirstHalf, FAQSecondHalf } from './styles';

const FAQSection = () => {
  const middleIndex = Math.ceil(FAQ.length / 2);

  const firstHalf = FAQ.splice(0, middleIndex);
  const secondHalf = FAQ.splice(-middleIndex);

  return (
    <FAQSectionContainer>
      <FAQGrid>
        <FAQFirstHalf>
          {firstHalf.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </FAQFirstHalf>
        <FAQSecondHalf>
          {secondHalf.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </FAQSecondHalf>
      </FAQGrid>
    </FAQSectionContainer>
  );
};
export default FAQSection;
