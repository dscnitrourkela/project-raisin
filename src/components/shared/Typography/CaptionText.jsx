import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-sm
    2xl:text-sm
    lg:text-sm
    md:text-xs
    sm:text-xs
    text-color-primary
  `}
`;
