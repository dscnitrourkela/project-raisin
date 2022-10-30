import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { profile } from '../../../config/content';
import { Body1, CaptionText, Heading4 } from '../shared';

const ProfileContainer = styled.div`
  ${tw`
    rounded-3xl
    p-12
    md:px-4
    bg-background-dark
    flex
    flex-col
    gap-6
    md:items-center
    max-h-[620px] 
    max-w-[500px]
    lg:max-w-full
  `}
  & button.desktop_only {
    ${tw`
        md:hidden
    `}
  }
  & button.mobile_only {
    ${tw`
        hidden
        md:flex
    `}
  }
`;

const ProfileTopContainer = styled.div`
  ${tw`
    flex
    justify-between
    lg:justify-center
  `}
`;

const ProfileTopLeftContainer = styled.div`
  ${tw`
    flex
    gap-6
  `}
`;

const ProfileImg = styled.img`
  ${tw`
    h-[72px]
    md:h-[53px]
    object-contain
  `}
`;

const ProfileTextContainer = styled.div`
  flex-grow: 1;
  ${tw`
    flex
    flex-col
    gap-2
  `}
`;

const ProfileName = styled(Heading4)`
  ${tw`capitalize`}
`;

const ProfileBottomContainer = styled.div`
  ${tw`
    grid
    w-full
    gap-16
    sm:gap-7
  `}
`;

const TextField = styled(Body1)`
  border-bottom: 1px solid #4b4b4b;
  ${tw`pb-1`}
`;

const EmailText = styled(CaptionText)`
  ${tw`text-color-secondary`}
`;

const ProfileCard = () => (
  <ProfileContainer>
    <ProfileTopContainer>
      <ProfileTopLeftContainer>
        <ProfileImg src={profile.avatar.imgSrc} alt={profile.name} />
        <ProfileTextContainer>
          <ProfileName bold>{profile.name}</ProfileName>
          <EmailText>{profile.mailId}</EmailText>
        </ProfileTextContainer>
      </ProfileTopLeftContainer>
    </ProfileTopContainer>
    <ProfileBottomContainer>
      {profile.feilds.map((field) => (
        <TextField key={field.id}>
          {field.fieldTag} : {field.fieldData}
        </TextField>
      ))}
    </ProfileBottomContainer>
  </ProfileContainer>
);

export default ProfileCard;
