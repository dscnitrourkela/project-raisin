import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const RegisterHeading = styled(Heading1)`
  ${tw`text-center text-4xl md:text-5xl lg:text-6xl`}
`;

export const RegisterContainer = styled.div`
  ${tw`min-h-screen flex flex-col items-center justify-center`}
`;

export const RegisterForm = styled.div`
  ${tw`w-full flex flex-col gap-10 items-center justify-center`}
`;

export const RegsiterButton = styled(PrimaryButton)`
  ${tw`w-[15rem] md:w-96 mt-16`}
`;
