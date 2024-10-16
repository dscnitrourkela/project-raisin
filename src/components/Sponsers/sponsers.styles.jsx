import styled from 'styled-components';
import tw from 'twin.macro';

export const SponsorWrapper = styled.div`
  ${tw`min-h-screen p-4 sm:p-6 md:p-8 bg-black bg-opacity-50`}
`;

export const SponsorContainer = styled.div`
  ${tw`mx-auto max-w-7xl `}
`;

export const SponsorRow = styled.div`
  ${tw`flex flex-col gap-4 md:flex-row sm:gap-6`}
`;

export const HalfColumn = styled.div`
  ${tw`w-full md:w-1/2`}
`;
