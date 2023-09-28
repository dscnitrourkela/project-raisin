import styled from 'styled-components';
import { Body2 } from '../..';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  position: relative;
`;

export const CustomInput = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  max-width: 400px;
  color: var(--text-color-primary);

  ${({ select, focused }) =>
    select &&
    `
    &::after {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    right: 14px;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--text-color-primary);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    transform: translateY(-50%) rotate(${focused ? '180deg' : '0deg'});
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  `}
`;

export const InputLabel = styled(Body2).attrs({ as: 'label' })`
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);
  position: absolute;
  left: 0px;
  top: 0px;
  transform: translate(14px, 14px) scale(1);
  transition:
    color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: none;

  ${({ focused, color, errorVisible }) =>
    focused &&
    `
    transform: translate(12px, -9px) scale(0.7);
    color: ${errorVisible ? 'var(--accent-error)' : color};
  `}
`;

export const InputField = styled.input`
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  background: none;
  /* height: 1.4375em; */
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 16.5px 14px;

  &:focus,
  &:active &:focus-visible {
    outline: none;
  }
`;

export const InputFieldSet = styled.fieldset`
  text-align: left;
  position: absolute;
  inset: -5px 0px 0px;
  margin: 0px;
  padding: 0px 8px;
  pointer-events: none;
  border-radius: 4px;
  overflow: hidden;
  min-width: 0%;
  border: 0.4px solid rgba(255, 255, 255, 0.23);
  transition: border 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ focused, color, errorVisible }) =>
    focused &&
    `
    border: 0.4px solid ${
      errorVisible ? 'var(--accent-error)' : color || 'var(--text-secondary, #EDEDED)'
    };
  `}

  & > legend {
    float: unset;
    width: auto;
    overflow: hidden;
    display: block;
    padding: 0;
    height: 11px;
    font-size: 0.75em;
    visibility: hidden;
    max-width: 0.01px;
    -webkit-transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    white-space: nowrap;

    ${({ focused }) =>
      focused &&
      `
      max-width: 100%;
    `}
  }
`;

export const CustomSelect = styled.select`
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  background: none;
  /* height: 1.4375em; */
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 18px 14px;

  &:focus,
  &:active &:focus-visible {
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }

  &::slotted(option) {
    display: none;
  }
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--background-secondary);
  max-width: 400px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 0.01px;
  -webkit-transition: max-height 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transition: max-height 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ focused }) =>
    focused &&
    `
    max-height: 100vh;
  `}
`;

export const CustomOption = styled.div`
  color: var(--text-color-primary);
  background-color: var(--background-secondary);
  padding: 18px 14px !important;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CustomButton = styled.button`
  color: ${({ color }) => color || 'var(--text-color-primary)'};
  background: ${({ bgColor }) => bgColor || 'var(--background-secondary)'};
  padding: 16.5px 14px;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
