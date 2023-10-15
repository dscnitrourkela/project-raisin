import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import SectionContainer from './SectionContainer';
import Body1 from './Typography/Body1';
import { HorizontalLine } from './styles';

export const SectionTitle = styled(Body1)`
  ${tw`
    text-white
    font-Inter
    bg-background-darker
    px-1
  `}
  position: absolute;
  text-transform: capitalize;
  left: ${({ left }) => (left ? 0 : 'auto')};
  right: ${({ right }) => (right ? 0 : 'auto')};
  transform: translateY(-50%);

  ${({ accent }) =>
    accent
      ? `
    color: #EABCFF;
  `
      : ''}//background: var(--brand-gradient);
  //-webkit-background-clip: text;
  //
  //background-clip: text;
  //-webkit-text-fill-color: transparent;
`;

export const CustomHGroup = styled.hgroup`
  ${tw`
    w-11/12
    mx-auto
    my-10
    relative
  `}
`;

const SectionHeader = ({ title }) => (
  <CustomHGroup>
    <SectionTitle left>{title}</SectionTitle>
    <HorizontalLine />
  </CustomHGroup>
);

const SectionFooter = ({ title, link }) => (
  <CustomHGroup>
    <HorizontalLine />
    <Link to={link}>
      <SectionTitle accent right>
        {title}
      </SectionTitle>
    </Link>
  </CustomHGroup>
);

const SectionLayout = ({ children, title, id, className, footer, footerLink }) => (
  <SectionContainer id={id} className={className}>
    <SectionHeader title={title} />
    {children}
    <SectionFooter title={footer} link={footerLink} />
  </SectionContainer>
);

export default SectionLayout;
