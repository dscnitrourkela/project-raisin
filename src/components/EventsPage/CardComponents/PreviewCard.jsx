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

function PreviewCard({ ImageURL, PreviewDescription = '', link = '' }) {
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 30 ? words.slice(0, 50).join(' ') + '...' : PreviewDescription;

  function handleToast() {
    toast('You can register after you are verified!', {
      icon: '🚀',
    });
  }
  return (
    <PreviewCardContainer>
      <PreviewCardImage src={ImageURL} alt='image' width={500} height={500} />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <PreviewButtonContainer>
        <PreviewMoreInfoButton2>
          {link === '' ? (
            'Coming soon'
          ) : (
            <Link href={link} target='_blank' rel='noopener noreferrer'>
              Rulebook
            </Link>
          )}
        </PreviewMoreInfoButton2>
        {link ? (
          <PreviewMoreInfoButton onClick={handleToast}>Register</PreviewMoreInfoButton>
        ) : null}
      </PreviewButtonContainer>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
