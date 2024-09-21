import styled from 'styled-components';
import tw from 'twin.macro';

export const Heading1 = styled.h1`
  ${tw`text-2xl md:text-3xl lg:text-5xl text-gray-900 font-orbitron mb-4 font-bold `}
  color: #00FFD1;
`;

export const Heading2 = styled.h2`
  ${tw`text-base md:text-lg lg:text-xl font-orbitron mb-3 font-medium text-white`}
`;

export const Logo = styled.h1`
  ${tw`mb-4 text-[80px] xsm:text-[120px]  md:text-[150px] lg:text-[170px] not-italic font-normal font-techno`}
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0px 0px 18.006px rgba(255, 255, 255, 0.4);
`;
