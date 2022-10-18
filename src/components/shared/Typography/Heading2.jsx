import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
        text-5xl
        xl:text-5xl
        lg:text-5xl
        md:text-3xl
        sm:text-3xl
        text-color-primary
        uppercase
        mb-10
        md:mb-6
    `};
`;
