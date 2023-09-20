import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h1`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase === false ? 'none' : 'uppercase')};
  ${tw`
    text-6xl
    font-Roslindale
    xl:text-6xl
    lg:text-5xl
    md:text-4xl
    sm:text-4xl
    text-color-primary
    mb-10
    md:mb-6
  `};
`;
