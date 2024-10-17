import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading2 } from '@/components/shared/Typography/Headings';

export const EventsContainer = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1728888341/Inno2k24/yupqoznoucyhxwchhbv7.png');
  ${tw`w-full flex flex-col items-center justify-center bg-cover pt-36 `}
`;

export const Heading3 = styled(Heading2)`
  ${tw`text-white/50 text-2xl mb-32 xsm:text-4xl md:text-6xl font-normal font-spaceX  text-center`}
`;
