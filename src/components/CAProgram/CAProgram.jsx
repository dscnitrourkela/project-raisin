import React from 'react';
import { Body1, Heading2, Heading3, SectionLayout } from '../shared';
import { CADetails } from '../../../config/content/CA';
import { ButtonContainer, ItemsContainer, PerksContainer } from './styles';
import Button from '../shared/Button';

const CAProgram = () => (
  <SectionLayout>
    <Heading2>{CADetails.title}</Heading2>
    <ItemsContainer>
      {CADetails.content.map((item) => (
        <div
          key={item.title}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Heading3
            style={{
              color: '#91F9D3',
            }}
          >
            {item.title}
          </Heading3>
          <PerksContainer>
            {item.list.map((listItem, index) => (
              <Body1 key={listItem}>
                {index + 1}. {listItem}
              </Body1>
            ))}
          </PerksContainer>
        </div>
      ))}
    </ItemsContainer>
    <ButtonContainer>
      <Button text={CADetails.button.text} variant='filled' link={CADetails.button.link} />
    </ButtonContainer>
  </SectionLayout>
);

export default CAProgram;
