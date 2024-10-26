import toast from 'react-hot-toast';

import {
  PreviewButtonContainer,
  PreviewCardContainer,
  PreviewCardContent,
  PreviewCardImage,
  PreviewMoreInfoButton,
  PreviewMoreInfoButton2,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, PreviewDescription = '' }) {
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
        <PreviewMoreInfoButton2>Rulebook</PreviewMoreInfoButton2>
        <PreviewMoreInfoButton onClick={handleToast}>Register</PreviewMoreInfoButton>
      </PreviewButtonContainer>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
