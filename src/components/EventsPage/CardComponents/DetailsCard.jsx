import Image from 'next/image';
import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
  DetailsCardcontainer,
  DetailsCardImage,
  DetailsImageContainer,
} from './DetailsCard.style';
import { DescriptionBanner } from '../Shared/Banner';
import { FlexContainer, StyledImage, TextBold } from '../Shared/banner.styles';

function DetailsCard({ ImageURL, Heading, Description, Location, Date, Time, Prizes }) {
  return (
    <DetailsCardcontainer>
      <DescriptionCardContainer>
        <DescriptionCardInner>
          <DescriptionCardHeading>{Heading}</DescriptionCardHeading>
          <DescriptionCardContent>{Description}</DescriptionCardContent>
        </DescriptionCardInner>
        <DetailsCardImage src={ImageURL} alt='image' width={400} height={400} />
      </DescriptionCardContainer>
      <DescriptionBanner Location={Location} Date={Date} Time={Time} Prizes={Prizes} />
    </DetailsCardcontainer>
  );
}

export default DetailsCard;
