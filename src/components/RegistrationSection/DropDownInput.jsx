import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1 } from '../shared';

const customStyles = {
  menu: () => ({
    backgroundColor: 'white',
  }),
  container: () => ({
    backgroundColor: 'white',
    marginTop: '12px',
  }),
  option: () => ({
    backgroundColor: 'white',
    color: '#323232',
    padding: '8px',
  }),
};

const DropDownContainer = styled.div`
  ${tw`text-color-primary`}
`;

const DropDownInput = ({ title, value, options, onChange }) => (
  <DropDownContainer>
    <Body1>{title}</Body1>
    <Select styles={customStyles} defaultValue={value} onChange={onChange} options={options} />
  </DropDownContainer>
);

export default DropDownInput;
