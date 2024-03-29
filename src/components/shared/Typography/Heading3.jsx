import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase === false ? 'none' : 'uppercase')};
  ${tw`
    text-4xl
    font-Roslindale
    2xl:text-4xl
    lg:text-4xl
    md:text-xl
    sm:text-xl
    text-color-primary
  `};
`;
