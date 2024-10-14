import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
  DescriptionCardImage,
} from './DetailsCard.style';

function DetailsCard({ ImageURL, Heading, Description }) {
  return (
    <DescriptionCardContainer>
      <DescriptionCardHeading>{Heading}</DescriptionCardHeading>
      <DescriptionCardInner>
        <DescriptionCardContent>{Description}</DescriptionCardContent>
        <DescriptionCardImage image={ImageURL} />
      </DescriptionCardInner>
    </DescriptionCardContainer>
  );
}

export default DetailsCard;
