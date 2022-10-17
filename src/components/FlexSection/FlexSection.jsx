import React from 'react';
import { flexData } from '../../../config/content';
import { SectionContainer } from '../shared';
import { BackgroundContainer, FlexText, InnerContainer } from './styles';

let counter = 0;
const FlexLogic = ({ id, tagText }) => {
  if (id !== 0 && id % 2 === 0) counter += 1;
  if (counter % 2 === 0)
    return (
      <>
        <FlexText>{tagText}</FlexText>
        <FlexText />
      </>
    );

  return (
    <>
      <FlexText />
      <FlexText>{tagText}</FlexText>
    </>
  );
};

const FlexSection = () => (
  <SectionContainer>
    <BackgroundContainer>
      <InnerContainer>
        {flexData.tags.map(({ id, tagText }) => (
          <FlexLogic key={id} id={id} tagText={tagText} />
        ))}
      </InnerContainer>
    </BackgroundContainer>
  </SectionContainer>
);

export default FlexSection;
