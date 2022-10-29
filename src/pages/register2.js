import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RegistrationForm from '../components/RegistrationSection/RegistrationForm';
import { Heading3, Layout, SectionContainer } from '../components/shared';

const Heading = styled(Heading3)`
  ${tw`mb-4 text-center `}
`;

const RegistrationContainer = styled.div`
  max-width: 476px;
  ${tw`p-12 mx-auto mt-10 overflow-y-hidden  1xsm:p-6 bg-background-dark`}
`;

const Register = () => (
  <Layout>
    <SectionContainer>
      <RegistrationContainer>
        <Heading bold>Register</Heading>
        <RegistrationForm />
      </RegistrationContainer>
    </SectionContainer>
  </Layout>
);

export default Register;
