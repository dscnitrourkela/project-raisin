/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading3, Body2, Layout } from '../components';

const Title = styled(Heading3)`
  ${tw`my-4`}
`;

const Desc = styled(Body2)`
  ${tw`mb-4 text-color-secondary `}
`;

const RefundContainer = styled.div`
  ${tw`mt-28 mb-8 min-h-[50vh]`}
`;

const privacy = () => (
  <Layout>
    <Container>
      <RefundContainer>
        <Title>Pricing</Title>
        <Desc>The Registration fee for Innovision 2k23 is ₹700. Free for NITR Students</Desc>
      </RefundContainer>
    </Container>
  </Layout>
);

export default privacy;
