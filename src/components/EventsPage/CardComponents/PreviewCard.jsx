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
import { useEffect, useState } from 'react';

function PreviewCard({
  ImageURL,
  id,
  PreviewDescription = '',
  handleRegisterEvent,
  loading,
  link = '',
  registeredEvents,
}) {
  const [isRegistered, setIsRegistered] = useState(false);
  const truncatedDescription =
    PreviewDescription.split(' ').length > 30
      ? PreviewDescription.split(' ').slice(0, 50).join(' ') + '...'
      : PreviewDescription;

  function handleToast() {
    toast('You can register after you are verified!', {
      icon: '🚀',
    });
  }

  useEffect(() => {
    const registered = registeredEvents.filter((items) => items.eventID === id);
    if (registered) setIsRegistered(true);
  });

  function handleClick() {
    handleRegisterEvent(id);
  }

  return (
    <PreviewCardContainer>
      <PreviewCardImage src={ImageURL} alt='image' width={500} height={500} />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <PreviewButtonContainer>
        <PreviewMoreInfoButton onClick={handleClick} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </PreviewMoreInfoButton>

        <PreviewMoreInfoButton2>
          {link === '' ? (
            'Coming soon'
          ) : (
            <Link href={link} target='_blank' rel='noopener noreferrer'>
              Rulebook
            </Link>
          )}
        </PreviewMoreInfoButton2>
        <PreviewMoreInfoButton onClick={handleClick} disabled={loading}>
          {loading ? 'Registering...' : isRegistered ? 'Registered' : 'Register'}
        </PreviewMoreInfoButton>
      </PreviewButtonContainer>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
