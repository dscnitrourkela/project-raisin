import React from 'react';
import AccordionItem from './AccordionItem';
import FAQContent from '../../../config/content/FAQ';
import { FAQSectionContainer, FAQGrid, FAQFirstHalf, FAQSecondHalf } from './styles';
import { SectionLayout } from '../shared';

const FAQSection = () => {
  const FAQ = FAQContent.FAQS;
  const middleIndex = Math.ceil(FAQ.length / 2);

  const firstHalf = FAQ.splice(0, middleIndex);
  const secondHalf = FAQ.splice(-middleIndex);

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
