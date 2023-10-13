import React from 'react';
import AccordionItem from './AccordionItem';
import { FAQSectionContainer, FAQGrid, FAQFirstHalf, FAQSecondHalf } from './styles';
import { SectionLayout } from '../shared';
import { FAQContent, FAQS } from '../../../config/content';

const FAQSection = () => {
  const middleIndex = Math.ceil(FAQS.length / 2);

  const firstHalf = FAQS.splice(0, middleIndex);
  const secondHalf = FAQS.splice(-middleIndex);

  return (
    <SectionLayout
      title={FAQContent.title}
      footer={FAQContent.footer}
      footerLink={FAQContent.footerLink}
      id={FAQContent.id}
    >
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
    </SectionLayout>
  );
};
export default FAQSection;
