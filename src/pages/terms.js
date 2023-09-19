/* eslint-disable react/no-unescaped-entities */
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

const terms = () => (
  <Layout>
    <Container>
      <RefundContainer>
        <Heading2>Terms and Condition</Heading2>
        <Title>Welcome to Innovision 2022!</Title>
        <Desc>
          These terms and conditions outline the rules and regulations for the use of Innovision's
          Website, located at https://inno.nitrkl.in/. By accessing this website, we assume you
          accept these terms and conditions. Do not continue to use Innovision 2022 if you do not
          agree to take all of the terms and conditions stated on this page.
        </Desc>
        <Title>License:</Title>
        <Desc>
          Unless otherwise stated, Innovision and/or its licensors own the intellectual property
          rights for all material on Innovision 2022. All intellectual property rights are reserved.
          <br /> You may access this from Innovision 2022 for your own personal use subjected to
          restrictions set in these terms and conditions. <br />
          You must not: <br />
          Copy or republish material from Innovision 2022 <br />
          Sell, rent, or sub-license material from Innovision 2022
          <br /> Reproduce, duplicate or copy material from Innovision 2022 Redistribute content
          from Innovision 2022
          <br />
          This Agreement shall begin on the date hereof.
        </Desc>
        <Title>Disclaimer:</Title>
        <Desc>
          To the maximum extent permitted by applicable law, we exclude all representations,
          warranties, and conditions relating to our website and the use of this website. Nothing in
          this disclaimer will: limit or exclude our or your liability for death or personal injury;
          limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit
          any of our or your liabilities in any way that is not permitted under applicable law; or
          exclude any of our or your liabilities that may not be excluded under applicable law. The
          limitations and prohibitions of liability set in this Section and elsewhere in this
          disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities
          arising under the disclaimer, including liabilities arising in contract, in tort, and for
          breach of statutory duty. As long as the website and the information and services on the
          website are provided free of charge, we will not be liable for any loss or damage of any
          nature.
        </Desc>{' '}
      </RefundContainer>
    </Container>
  </Layout>
);

export default terms;
