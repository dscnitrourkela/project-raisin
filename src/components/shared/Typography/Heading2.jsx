import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase === false ? 'none' : 'uppercase')};
  ${tw`
    text-5xl
    font-Roslindale
    xl:text-5xl
    lg:text-4xl
    md:text-3xl
    sm:text-3xl
    text-color-primary
  `};
`;
