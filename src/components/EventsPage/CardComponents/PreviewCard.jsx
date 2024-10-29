import { memo, useEffect, useMemo, useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import {
  PreviewButtonContainer,
  PreviewCardContainer,
  PreviewCardContent,
  PreviewCardImage,
  PreviewMoreInfoButton,
  PreviewMoreInfoButton2,
} from './PreviewCard.style';
import { blurData } from '@/config/content/EventsPage/BannerData';

const MAX_WORDS = 50;
const TOAST_MESSAGE = 'You have registered for this event!';

const PreviewCard = memo(
  ({
    ImageURL,
    id,
    PreviewDescription = '',
    handleRegisterEvent,
    loading = false,
    link = '',
    registeredEvents = [],
    isCurrentId,

  }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    const truncatedDescription = useMemo(() => {
      const words = PreviewDescription.split(' ');
      return words.length > 30 ? `${words.slice(0, MAX_WORDS).join(' ')}...` : PreviewDescription;
    }, [PreviewDescription]);

    useEffect(() => {
      const checkRegistration = () => {
        const registered = registeredEvents.some((item) => item.eventID === id);
        setIsRegistered(registered);
      };
      checkRegistration();
    }, [registeredEvents, id]);

    const handleToast = useCallback(() => {
      toast(TOAST_MESSAGE, {
        icon: '🚀',
        duration: 3000,
      });
    }, []);

    const handleClick = useCallback(() => {
      if (!loading && !isRegistered) {
        handleRegisterEvent(id);
      }
    }, [handleRegisterEvent, id, loading, isRegistered]);

    const renderRulebook = useMemo(() => {
      if (!link) return 'Coming soon';

      return (
        <Link href={link} target='_blank' rel='noopener noreferrer' aria-label='View rulebook'>
          Rulebook
        </Link>
      );
    }, [link]);

    const buttonText =

      loading && isCurrentId == id ? 'Registering...' : isRegistered ? 'Registered' : 'Register';


    return (
      <PreviewCardContainer>
        <PreviewCardImage
          src={ImageURL}
          alt='Event preview image'
          width={500}
          height={500}
          loading='lazy'
          placeholder='blur'
          blurDataURL={blurData}
        />
        <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
        <PreviewButtonContainer>
          <PreviewMoreInfoButton2>{renderRulebook}</PreviewMoreInfoButton2>
          <PreviewMoreInfoButton
            onClick={isRegistered ? handleToast : handleClick}
            disabled={loading}
            aria-label={buttonText}
          >
            {buttonText}
          </PreviewMoreInfoButton>
        </PreviewButtonContainer>
      </PreviewCardContainer>
    );
  },
);

PreviewCard.displayName = 'PreviewCard';

export default PreviewCard;
