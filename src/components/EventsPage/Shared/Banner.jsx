import Image from 'next/image';
import { DescriptionCardBottom } from '../CardComponents/DetailsCard.style';
import {
  Container,
  FlexColumnContainer,
  FlexContainer,
  StyledImage,
  TextBold,
  TextSemiBold,
} from './banner.styles';

export const DescriptionBanner = ({ Prizes, Location, Time, Date }) => {
  return (
    <Container>
      <DescriptionCardBottom>
        <div className='flex flex-col justify-center gap-2'>
          <FlexContainer>
            <StyledImage
              src='https://res.cloudinary.com/dfe8sdlkc/image/upload/v1729309788/352521_location_on_icon_u8d6am.png'
              alt='Location'
              width={60}
              height={60}
            />
            <TextBold>{Location}</TextBold>
          </FlexContainer>

          <FlexContainer>
            <StyledImage
              src='https://res.cloudinary.com/dfe8sdlkc/image/upload/v1729311717/8981284_deadline_schedule_calendar_event_time_icon_sozwq1.png'
              alt='Date and Time'
              width={60}
              height={60}
            />
            <FlexColumnContainer>
              <TextBold>{Date}</TextBold>
              <TextSemiBold>{Time}</TextSemiBold>
            </FlexColumnContainer>
          </FlexContainer>
        </div>
        <FlexContainer>
          <StyledImage
            src='https://res.cloudinary.com/dhv234qct/image/upload/v1729337575/ywb8h5oubo7hlqrmtjxa.svg'
            alt='Prizes'
            width={40}
            height={40}
          />
          <TextBold>{Prizes}</TextBold>
        </FlexContainer>
      </DescriptionCardBottom>
    </Container>
  );
};
