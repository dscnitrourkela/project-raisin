import React from 'react';
import { flexData } from '../../../config/content';
import { BackgroundContainer, FlexSectionContainer, FlexText, InnerContainer } from './styles';

let counter = 0;
const FlexLogic = ({ id, tagText }) => {
  if (id !== 0 && id % 2 === 0) counter += 1;
  if (counter % 2 === 0)
    return (
      <>
        <FlexText>{tagText}</FlexText>
        <FlexText className='desktop-only' />
      </>
    );

  return (
    <>
      <FlexText className='desktop-only' />
      <FlexText>{tagText}</FlexText>
    </>
  );
};

const FlexSection = () => (
  <FlexSectionContainer className='desktop-only'>
    <BackgroundContainer>
      <InnerContainer>
        {flexData.tags.map(({ id, tagText }) => (
          <FlexLogic key={id} id={id} tagText={tagText} />
        ))}
      </InnerContainer>
    </BackgroundContainer>
  </FlexSectionContainer>
);

export default FlexSection;
