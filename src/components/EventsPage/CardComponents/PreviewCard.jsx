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
import { useState } from 'react';

function PreviewCard({
  ImageURL,
  id,
  PreviewDescription = '',
  handleRegisterEvent,
  loading,
  link = '',
}) {
  const [isRegistered, setIsRegistered] = useState(false);
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 30 ? words.slice(0, 50).join(' ') + '...' : PreviewDescription;

  function handleToast() {
    toast('You can register after you are verified!', {
      icon: '🚀',
    });
  }

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
          {loading ? 'Registering...' : 'Register'}
        </PreviewMoreInfoButton>
      </PreviewButtonContainer>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
