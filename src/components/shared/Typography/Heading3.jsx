import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-4xl
    2xl:text-4xl
    lg:text-4xl
    md:text-2xl
    sm:text-2xl
    text-color-primary
    `};
`;
