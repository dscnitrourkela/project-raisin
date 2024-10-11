import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const ModalText = styled(Heading1)`
  ${tw`font-bold border-none`}
`;

export const ModalExit = styled(PrimaryButton)`
  ${tw`font-normal hover:scale-105 `}
`;
