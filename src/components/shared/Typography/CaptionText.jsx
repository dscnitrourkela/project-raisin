import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-xs
    font-Inter
    text-color-primary
  `}

  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
`;
