import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const PlusContainer = styled.div`
  ${tw`
    w-4
    h-4
    p-0
    m-0
    relative
  `}
`;
const BarOne = styled.div`
  ${tw`
  `}
  background-color: ${(props) => (props.active ? '#91F9D3' : '#D9D9D9')};
  width: 16px;
  height: 2px;
  position: absolute;
  top: 7px;
  left: 0;
  transition: transform 100ms;
  transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(90deg)')};
`;

const BarTwo = styled.div`
  ${tw`
    
  `}
  background-color: ${(props) => (props.active ? '#91F9D3' : '#D9D9D9')};
  width: 16px;
  height: 2px;
  transform: rotate(0deg);
  position: absolute;
  top: 7px;
  left: 0;
`;

const PlusIcon = ({ active }) => (
  <PlusContainer>
    <BarOne active={active} />
    <BarTwo active={active} />
  </PlusContainer>
);

export default PlusIcon;
