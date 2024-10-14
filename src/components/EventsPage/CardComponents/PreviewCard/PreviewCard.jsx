import {
  PreviewCardContainer,
  PreviewCardImage,
  PreviewCardContent,
  PreviewMoreInfoButton,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, PreviewDescription }) {
  return (
    <PreviewCardContainer>
      <PreviewCardImage image={ImageURL} />
      <PreviewCardContent>{PreviewDescription}</PreviewCardContent>
      <PreviewMoreInfoButton>MORE INFORMATION</PreviewMoreInfoButton>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
