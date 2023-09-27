import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
    text-[14px]
    font-Inter
    font-[300]
    leading-[20px]
    md:leading-[22px]
    text-color-primary
  `}
`;
