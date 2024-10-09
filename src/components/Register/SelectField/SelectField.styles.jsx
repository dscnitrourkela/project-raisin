import styled from 'styled-components';
import tw from 'twin.macro';

export const SelectFieldContainer = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 4.5em;
  border-radius: 0.25em;
  overflow: hidden;
  width: 100%;

  ::after { content: '\25BC';
  position: absolute;
  height: 100%;
  top: 8px;
  right: 0;
  padding: 1em;
  transition: 0.25s all ease;
  pointer-events: none;
  }

  :hover::after {
  color: #00ffd1;
}
`;

export const SelectFieldInput = styled.select`
  appearance: none;
  outline: 10px red;
  border: 0;
  box-shadow: none;
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background: #050b17;
  cursor: pointer;
  width: 100%;

  ::-ms-expand {
    display: none;
  }
`;
