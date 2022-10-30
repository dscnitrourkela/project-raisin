import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Helmet } from 'react-helmet';
import { Container, Layout, ProfileCard, SectionContainer } from '../components';
import RegisteredEventsSection from '../components/profile/RegisteredEventsSection';

const ProfileSectionContainer = styled.div`
  ${tw`flex lg:flex-col gap-8 mt-12`}
`;

export default function Error404() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Profile</title>
        <meta name='description' content='This is profile page' />
      </Helmet>
      <Layout>
        <SectionContainer>
          <Container>
            <ProfileSectionContainer>
              <ProfileCard />
              <RegisteredEventsSection />
            </ProfileSectionContainer>
          </Container>
        </SectionContainer>
      </Layout>
    </>
  );
}
