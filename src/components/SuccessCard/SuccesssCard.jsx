import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CaptionText, Heading4, LinkButton } from '../shared';

const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    h-screen
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
    h-full
    max-w-[536px]
    w-full
    bg-background-dark
    rounded-3xl
    sm:rounded-xl
    grid 
    grid-rows-2
    overflow-hidden
  `}
`;

const UpperContainer = styled.div`
  background: ${(props) => (props.failure ? '#04D263' : '#d20404')};
  ${tw`
    flex
    justify-center
    items-center
  `}
`;

const Image = styled.img`
  ${tw`
    w-auto
    object-contain
  `}
`;

const LowerContainer = styled.div`
  ${tw`
    p-9
    flex
    flex-col
    items-center
    text-center
    gap-9
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
    gap-1
  `}
`;

const SuccesssCard = ({ data, failure }) => (
  <SectionContainer>
    <Card>
      <UpperContainer failure={failure}>
        <Image src={data.tick.imgSrc} alt={data.tick.alt} />
      </UpperContainer>
      <LowerContainer>
        <div>
          <SuccessText>{data.success1}</SuccessText>
          <SuccessText>{data.success2}</SuccessText>
        </div>
        <ButtonContainer>
          <LinkButton text={data.btnText} link={data.link} />
          <CaptionText>{data.caption}</CaptionText>
        </ButtonContainer>
      </LowerContainer>
    </Card>
  </SectionContainer>
);

export default SuccesssCard;
