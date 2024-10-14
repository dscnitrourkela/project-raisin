import styled from 'styled-components';
import tw from 'twin.macro';

export const SponsorWrapper = styled.div`
  ${tw`min-h-screen p-4 sm:p-6 md:p-8`}
  background: conic-gradient(
    from 179.71deg at 51.08% 32.13%,
    #0B0B0B 0%,
    #0E2C33 23%, 
    #000000 30%, 
    #000000 65%, 
    #4E0E48 70%, 
    #0B0B0B 98% 
  );
  backdrop-filter: blur(11px);
`;

export const SponsorContainer = styled.div`
  ${tw`mx-auto max-w-7xl`}
`;

export const SponsorRow = styled.div`
  ${tw`flex flex-col gap-4 md:flex-row sm:gap-6`}
`;

export const HalfColumn = styled.div`
  ${tw`w-full md:w-1/2`}
`;
