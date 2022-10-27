import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RegistrationForm from '../components/RegistrationSection/RegistrationForm';
import { Heading3, Layout, SectionContainer } from '../components/shared';

const Heading = styled(Heading3)`
  ${tw`
  text-center
  mb-4
  `}
`;

const RegistrationContainer = styled.div`
  max-width: 476px;
  ${tw`
  mt-10
  p-12
  mx-auto
  1xsm:p-6
  overflow-y-hidden
  bg-background-dark
  `}
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
