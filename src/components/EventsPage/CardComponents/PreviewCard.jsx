import toast from 'react-hot-toast';
import {
  PreviewButtonContainer,
  PreviewCardContainer,
  PreviewCardContent,
  PreviewCardImage,
  PreviewMoreInfoButton,
  PreviewMoreInfoButton2,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, id, PreviewDescription = '', handleRegisterEvent }) {
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 30 ? words.slice(0, 50).join(' ') + '...' : PreviewDescription;

  function handleToast() {
    toast('You can register after you are verified!', {
      icon: '🚀',
    });
  }
  // console.log(id)
  function handleClick() {
    handleRegisterEvent(id);
  }

  return (
    <PreviewCardContainer>
      <PreviewCardImage src={ImageURL} alt='image' width={500} height={500} />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <PreviewButtonContainer>
        <PreviewMoreInfoButton2>Rulebook</PreviewMoreInfoButton2>
        <PreviewMoreInfoButton onClick={handleClick}>Register</PreviewMoreInfoButton>
      </PreviewButtonContainer>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
