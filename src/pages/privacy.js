/* eslint-disable max-len */
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading2, Heading3, Body2, Layout } from '../components';

const Title = styled(Heading3)`
  ${tw`my-4`}
`;

const Desc = styled(Body2)`
  ${tw`mb-4 text-color-secondary `}
`;

const RefundContainer = styled.div`
  ${tw`mt-28 mb-8 `}
`;

const privacy = () => (
  <Layout>
    <Container>
      <RefundContainer>
        <Heading2>Privacy Policy for Innovision 2022</Heading2>
        <Desc>
          At Innovision, accessible from https://inno.nitrkl.in/, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types of information that
          is collected and recorded by Innovision and how we use it.
          <br /> If you have additional questions or require more information about our Privacy
          Policy, do not hesitate to contact us at
          <a href='mailto:innovision.nitrkl@gmail.com'>innovision.nitrkl@gmail.com</a>.
          <br /> This Privacy Policy applies only to our online activities and is valid for visitors
          to our website with regards to the information that they shared and/or collect in
          Innovision. This policy is not applicable to any information collected offline or via
          channels other than this website.
        </Desc>
        <Title>Consent</Title>
        <Desc>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </Desc>
        <Title>Information we collect</Title>
        <Desc>
          The personal information that you are asked to provide, and the reasons why you are asked
          to provide it, will be made clear to you at the point we ask you to provide your personal
          information. When you register for an Account, we may ask for your contact information,
          including items such as name, education details, address, email address, and telephone
          number.
        </Desc>
        <Title>How we use your information</Title>
        <Desc> We use the information provided by you to track the attendance od the events.</Desc>
        <Title>We do not sell data to any 3rd party or ad companies</Title>
      </RefundContainer>
    </Container>
  </Layout>
);

export default privacy;
