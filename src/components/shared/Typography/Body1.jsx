import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-xl
    2xl:text-xl
    lg:text-xl
    md:text-base
    sm:text-base
    text-color-primary
    `}
`;
