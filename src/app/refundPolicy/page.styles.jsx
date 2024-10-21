import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading2 } from '@/components/shared/Typography/Headings';

export const PaymentContainer = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1728888341/Inno2k24/yupqoznoucyhxwchhbv7.png');
  ${tw`w-full flex flex-col bg-cover pt-24 pl-4 xxxs:pl-8 pr-8 xsm:pt-48 md:pt-52`}
`;

export const Heading3 = styled(Heading2)`
  ${tw`text-[#00FFD1] text-2xl mb-12 xsm:mb-28 xsm:text-4xl md:text-5xl font-bold font-orbitron  text-left`}
`;

export const Heading4 = styled(Heading2)`
  ${tw`text-white text-xl mb-12 xsm:mb-28 xsm:text-2xl md:text-3xl font-normal font-montserrat text-left`}
`;
