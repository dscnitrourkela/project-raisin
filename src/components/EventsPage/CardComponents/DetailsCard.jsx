import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
  DetailsCardcontainer,
  DetailsCardImage,
} from './DetailsCard.style';
import { DescriptionBanner } from '../Shared/Banner';
import ReadMore from '../Shared/ReadMoreText';

function DetailsCard({ ImageURL, Heading, Description, Location, Date, Time, Prizes }) {
  return (
    <DetailsCardcontainer>
      <DescriptionCardContainer>
        <DescriptionCardInner>
          <DescriptionCardHeading>{Heading}</DescriptionCardHeading>

          <DescriptionCardContent>
            <ReadMore text={Description} charLimit={450} />
          </DescriptionCardContent>

          <DescriptionBanner Location={Location} Date={Date} Time={Time} Prizes={Prizes} />
        </DescriptionCardInner>

        <DetailsCardImage src={ImageURL} alt='image' width={500} height={500} />
      </DescriptionCardContainer>
    </DetailsCardcontainer>
  );
}

export default DetailsCard;
