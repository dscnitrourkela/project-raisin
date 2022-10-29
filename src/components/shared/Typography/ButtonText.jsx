import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-lg
    2xl:text-lg
    lg:text-lg
    md:text-sm
    sm:text-sm
    capitalize
  `};
`;
