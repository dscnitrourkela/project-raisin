import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};

  ${(props) =>
    props.outline
      ? {
          'background-image': 'var(--brand-gradient)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      : ''};

  ${tw`
    text-base
    2xl:text-base
    lg:text-base
    md:text-sm
    sm:text-sm
    capitalize
  `};
`;
