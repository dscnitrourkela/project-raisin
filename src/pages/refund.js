/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading2, Heading3, Body2, Layout } from '../components';

const Title = styled(Heading3)`
  ${tw`my-2`}
`;

const Desc = styled(Body2)`
  ${tw`mb-2 text-color-secondary`}
`;

const RefundContainer = styled.div`
  ${tw`mt-28 mb-8 min-h-[50vh]`}
`;

const refund = () => (
  <Layout>
    <Container>
      <RefundContainer>
        <Heading2>Refund Policy for Innovision 2022</Heading2>
        <Desc>
          Thank you for registering at Innovision 2022. If, for any reason, You are not completely
          satisfied with a purchase We invite You to review our policy on refunds and returns
        </Desc>
        <Title>Your Registration Cancellation Rights</Title>
        <Desc>No Refund will be issued until and unless the event is cancelled by us</Desc>
        <Title>Contact Us</Title>
        <Desc>
          If you have any questions about our Returns and Refunds Policy, please contact us: By
          email: <a href='mailto:innovision.nitrkl@gmail.com'>innovision.nitrkl@gmail.com</a>
        </Desc>
      </RefundContainer>
    </Container>
  </Layout>
);

export default refund;
