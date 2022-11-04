/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import EventDetailsModal from '../EventDetailsModal/EventDetailsModal';
import { AuthContext } from '../../utils/Auth';
import { avenueApi } from '../../utils/api';
import {
  Body1,
  Body2,
  Button2,
  ButtonText,
  Heading3,
  Heading4,
  LinkButton,
  ModalBox,
} from '../shared';
import eventImage from '../../../images/coming-soon.png';

const CardContainer = styled.div`
  width: 400px;
  max-width: 328px;
  @media (min-width: 768px) {
    max-width: 380px;
  }
  @media (max-width: 375px) {
    max-width: 100%;
  }
  ${tw`h-auto p-4 md:p-3 bg-background-dark rounded-xl`};
`;
const CardImage = styled.img`
  ${tw`w-full rounded-lg `}
`;

const CardTextContainer = styled.div`
  ${tw`mt-4 md:mt-3`}
`;

const CardTitleContainer = styled.div`
  ${tw`flex items-center justify-between `}
`;

const CardButtonContainer = styled.div`
  ${tw`flex justify-between mt-4`}
`;

const EventDate = styled(Body1)`
  ${tw`
    text-color-secondary
    min-w-[80px]
    text-right
  `}
`;

const EventTime = styled(Body2)`
  ${tw` text-color-secondary`}
`;

const CardHeading = styled(Heading4)`
  ${tw`mr-2 truncate `}
`;

const EventClub = styled(Body2)`
  ${tw` text-color-secondary`}
`;

const EventPrizes = styled(ButtonText)`
  margin-left: -16px;
  @media (max-width: 768px) {
    margin-left: -12px;
  }
  ${tw`px-4 py-2 mt-4 text-color-primary md:px-3 bg-background-darker w-max`}
`;

const RegisterContainer = styled.div`
  background: var(--background-primary);
  border-radius: 10px;
  width: 100%;
`;

const ModalWrapper = styled.div`
  #modal-content {
    justify-content: center !important;
  }
`;

const Button = styled.div`
  width: auto;
  min-width: 70px;
  border-radius: 60px;
  background: transparent;
  border: 1px solid white;
  margin-top: 4rem;
  color: white;
  padding: 15px 20px;

  &:hover {
    color: var(--background-primary);
    background: white;
    cursor: pointer;
  }
`;

const EventCard = ({ data, prize = false }) => {
  const authContext = useContext(AuthContext);
  const { user, login, userData } = authContext;

  const [modalOpen, setModalOpen] = useState(false);
  const [registerCheckModal, setRegisterCheckModal] = useState(false);

  const handleRegisterClick = () => setRegisterCheckModal(true);

  // eslint-disable-next-line consistent-return
  const handleRegisterUser = async () => {
    if (!user) return login();

    try {
      const { data: registrationData } = await avenueApi.post(
        '/user/registration',
        {
          userID: userData?.id,
          eventID: data.id,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        },
      );

      if (registrationData) {
        toast.success(`Successfully registered for the event ${data.heading}`);
      }
    } catch (error) {
      toast.error(error.response.data || 'Something went Wrong, please try again');
    }

    setRegisterCheckModal(false);
  };

  return (
    <>
      <CardContainer>
        <CardImage src={data.eventImage.imgSrc || eventImage} alt={data.eventImage.alt} />
        <CardTextContainer>
          <CardTitleContainer>
            <CardHeading bold>{data.heading}</CardHeading>
            <EventDate>
              {data.dateTime ? `${format(new Date(data.dateTime), 'MMM do')}` : 'TBA'}
            </EventDate>
          </CardTitleContainer>
          <CardTitleContainer>
            <EventClub>{data.subHeading ? data.subHeading : 'TBA'}</EventClub>
            <EventTime>
              {data.dateTime ? `${format(new Date(data.dateTime), 'h:mm aaa')}` : 'TBA'}
            </EventTime>
          </CardTitleContainer>
          {prize ? (
            <EventPrizes>
              {data.prizeAmount
                ? `GOODIES WORTH UPTO ${data.prizeAmount}`
                : 'Prizes to be declared'}
            </EventPrizes>
          ) : null}
          <CardButtonContainer>
            <Button2 method={() => setModalOpen(true)} text='Know More' />
            <LinkButton text='Register' method={handleRegisterClick} />
          </CardButtonContainer>
        </CardTextContainer>
      </CardContainer>
      <ModalBox isOpen={modalOpen} close={() => setModalOpen(false)}>
        <EventDetailsModal
          heading={data.heading}
          subHeading={data.subHeading}
          imgSrc={data.eventImage.imgSrc}
          alt={data.eventImage.alt}
          dateTime={data.dateTime}
          location={data.location}
          prizeAmount={data.prizeAmount}
          contactDetails={data.contactDetails}
          aboutDetails={data.aboutDetails}
          prize={prize}
        />
      </ModalBox>
      <ModalWrapper>
        <ModalBox isOpen={registerCheckModal} close={() => setRegisterCheckModal(false)}>
          <RegisterContainer>
            <Heading3>{user ? 'Registration Confirmation' : 'Login Required'}</Heading3>
            <Body2 style={{ marginTop: '1rem' }}>
              {user
                ? `Please confirm that you want to register for the event ${data.heading}`
                : 'Please login before your register for an event'}
            </Body2>

            <Button onClick={handleRegisterUser}>{user ? 'Register' : 'Login'}</Button>
          </RegisterContainer>
        </ModalBox>
      </ModalWrapper>
      {/* <ToastContainer /> */}
    </>
  );
};
export default EventCard;
