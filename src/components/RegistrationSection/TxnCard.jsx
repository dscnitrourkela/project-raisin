import React from 'react';

import styled from 'styled-components';

import { Body1 } from '../shared';

const TxnContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  border-radius: 8px;
  padding: 0px;
  overflow: hidden;
  background: var(--background-secondary);
`;

const TxnIconContainer = styled.div`
  background: ${(props) => (props.success ? '#04D263' : '#d20404')};
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 6rem;
  height: auto;
`;

const TxnDetailsContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const TxnCard = ({ text, icon, type, button }) => (
  <TxnContainer>
    <TxnIconContainer success={type === 'success'}>
      <Icon alt='transaction status' src={icon} />
    </TxnIconContainer>

    <TxnDetailsContainer>
      <Body1 style={{ width: '70%', textAlign: 'center' }}>{text}</Body1>
      {button}
    </TxnDetailsContainer>
  </TxnContainer>
);

export default TxnCard;
