import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, CaptionText } from '../shared';
import TextInput from './TextInput';

library.add(faCaretDown);

const DropDownContainer = styled.div`
  ${tw`text-color-primary`}
`;

const DropDownButton = styled.button`
  border: 1px solid white;
  ${tw`
    mt-3
    w-full
    text-left
    p-2
    text-color-secondary
    flex
    rounded-DEFAULT
`}
`;

const DropDownButtonText = styled(CaptionText)`
  flex-grow: 1;
  ${tw``}
`;

const DropDownListContainer = styled.ul`
  ${tw`
  max-h-24
  overflow-y-auto
  p-1
  pt-4  
  bg-background-dark
  `}
`;

const DropDownListItem = styled.li`
  ${tw`
    py-2
    cursor-pointer
  `}
`;

const OtherInputField = styled.div`
  ${tw`
    mt-2
  `}
`;

const DropDownInput = ({ title, type, setType, options, other }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [otherInputShow, setOtherInputShow] = useState(false);
  const [dropDownSelected, setDropDownSelected] = useState('Select');

  const handleSelect = (dropDownItem) => {
    if (dropDownItem === 'Other') {
      setOtherInputShow(true);
      setType('If Other, then type');
    } else {
      setOtherInputShow(false);
      setType(dropDownItem);
    }
    setDropDownSelected(dropDownItem);
    setDropDownOpen(false);
  };

  return (
    <DropDownContainer>
      <Body1>{title}</Body1>
      <DropDownButton onClick={() => setDropDownOpen(!dropDownOpen)}>
        <DropDownButtonText>{dropDownSelected}</DropDownButtonText>
        <FontAwesomeIcon style={{ marginRight: 20 }} icon={faCaretDown} size='1x' />
      </DropDownButton>
      {dropDownOpen && (
        <DropDownListContainer>
          {options.map((dropDownItem) => (
            <DropDownListItem onClick={() => handleSelect(dropDownItem)} key={dropDownItem}>
              {dropDownItem}
            </DropDownListItem>
          ))}
        </DropDownListContainer>
      )}
      {other && otherInputShow && (
        <OtherInputField>
          <TextInput setType={setType} type={type} />
        </OtherInputField>
      )}
    </DropDownContainer>
  );
};
export default DropDownInput;
