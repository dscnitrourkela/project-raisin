import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { success } from '../../../config/content';
import { CaptionText, Heading4, LinkButton } from '../shared';

const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
    pt-[100px]
    lg:pt-[90px]
    sm:pt-[70px]
  `}
`;

const Card = styled.div`
  ${tw`
    max-h-[660px]
    sxm:max-h-[100%]
    h-full
    max-w-[536px]
    sxm:max-w-[328px]
    w-full
    bg-background-dark
    rounded-3xl
    sxm:rounded-2xl
    grid 
    grid-rows-2
    overflow-hidden
  `}
`;

const UpperContainer = styled.div`
  ${tw`
    bg-[#04D263]
    flex
    justify-center
    items-center
  `}
`;

const Image = styled.img`
  ${tw`
    w-auto
    sxm:w-[72px]
    object-contain
  `}
`;

const LowerContainer = styled.div`
  ${tw`
    p-9
    sxm:py-6
    sxm:px-4
    flex
    flex-col
    items-center
    text-center
    gap-9
    sxm:gap-6
  `}
`;

const SuccessText = styled(Heading4)`
  ${tw`
    capitalize
    text-color-secondary
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-2
  `}
`;

const SuccesssCard = () => (
  <SectionContainer>
    <Card>
      <UpperContainer>
        <Image src={success.tick.imgSrc} alt={success.tick.alt} />
      </UpperContainer>
      <LowerContainer>
        <div>
          <SuccessText>{success.success1}</SuccessText>
          <SuccessText>{success.success2}</SuccessText>
        </div>
        <ButtonContainer>
          <LinkButton text={success.btnText} link={success.link} />
          <CaptionText>{success.caption}</CaptionText>
        </ButtonContainer>
      </LowerContainer>
    </Card>
  </SectionContainer>
);

export default SuccesssCard;
