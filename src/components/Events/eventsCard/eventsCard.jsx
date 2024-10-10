import {
  EventsCardContainer,
  ImageWrapper,
  ImageParentContainer,
  ImageContainer,
  ContentAndButtonWrapper,
  ContentContainer,
  EventHeading,
  EventDescription,
  ButtonContainer,
  RegisterButton,
  RuleBookButton,
} from './eventsCard.styles';

export const EventCardType1 = ({ bgImage, eventTitle, eventDescription }) => {
  return (
    <EventsCardContainer>
      <ImageWrapper>
        <ImageParentContainer>
          <ImageContainer bgimage={bgImage} />
        </ImageParentContainer>
      </ImageWrapper>
      <ContentAndButtonWrapper>
        <ContentContainer>
          <EventHeading>{eventTitle}</EventHeading>
          <EventDescription>{eventDescription}</EventDescription>
        </ContentContainer>
        <ButtonContainer>
          <RegisterButton>REGISTER</RegisterButton>
          <RuleBookButton>RULE BOOK</RuleBookButton>
        </ButtonContainer>
      </ContentAndButtonWrapper>
    </EventsCardContainer>
  );
};

export const EventCardType2 = ({ bgImage, eventHeading, eventDescription }) => {
  return (
    <EventsCardContainer>
      <ContentAndButtonWrapper>
        <ContentContainer>
          <EventHeading>{eventHeading}</EventHeading>
          <EventDescription>{eventDescription}</EventDescription>
        </ContentContainer>
        <ButtonContainer>
          <RegisterButton>REGISTER</RegisterButton>
          <RuleBookButton>RULE BOOK</RuleBookButton>
        </ButtonContainer>
      </ContentAndButtonWrapper>
      <ImageWrapper>
        <ImageParentContainer>
          <ImageContainer bgimage={bgImage} />
        </ImageParentContainer>
      </ImageWrapper>
    </EventsCardContainer>
  );
};
