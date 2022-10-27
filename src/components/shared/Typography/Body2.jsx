import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-base
    2xl:text-base
    lg:text-base
    md:text-sm
    sm:text-sm
    text-color-primary
    `}
`;
