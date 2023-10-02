import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading3 } from '../shared';

export const SponsorContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }
`;

const SponsorLogo = styled.div`
  ${tw`p-4 pl-0 m-auto justify-center align-middle`}
  & >* {
    /* ${tw` lg:w-40 md:w-36 sm:w-28`} */
  }
`;

export const SponsorIcon = ({ pic, alt, size, link, margin, marginTop, title, color }) => (
  <SponsorLogo style={{ margin }}>
    {pic ? (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={pic} alt={alt} style={{ width: size, marginTop }} />
      </a>
    ) : (
      <div />
    )}
    <Heading3 style={{ paddingTop: '2rem', color }}>{title}</Heading3>
  </SponsorLogo>
);

export const Wrapper = styled.div`
  ${tw`
       rounded-lg
       p-5
       bg-transparent
       mx-auto
     `}
  @media (max-width: 900px) {
    grid-column: span 7;
  }
`;
