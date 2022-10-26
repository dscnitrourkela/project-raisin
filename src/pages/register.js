import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RegistrationForm from '../components/RegistrationSection/RegistrationForm';
import { Container, Heading2, Layout, SectionContainer } from '../components/shared';

const Heading = styled(Heading2)`
  ${tw`mt-10`}
`;

const Register = () => (
  <Layout>
    <SectionContainer>
      <Container>
        <Heading>Register</Heading>
        <RegistrationForm />
      </Container>
    </SectionContainer>
  </Layout>
);

export default Register;
