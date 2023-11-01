import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase === false ? 'none' : 'uppercase')};
  ${tw`
    text-3xl
    font-Roslindale
    2xl:text-3xl
    lg:text-3xl
    md:text-xl
    sm:text-xl
    text-color-primary
  `};

  ${(props) => props.font && `font-family: ${props.font};`};
`;
