import Image from 'next/image';
import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
} from './DetailsCard.style';
import { DescriptionBanner } from '../Shared/Banner';
import { FlexContainer, StyledImage, TextBold } from '../Shared/banner.styles';

function DetailsCard({ ImageURL, Heading, Description, Location, Date, Time, Prizes }) {
  return (
    <div className='flex flex-col items-center gap-5'>
      <DescriptionCardContainer>
        <DescriptionCardInner>
          <DescriptionCardHeading>{Heading}</DescriptionCardHeading>
          <DescriptionCardContent>{Description}</DescriptionCardContent>
          {/* <div className='flex justify-end'>
          <FlexContainer >
            <Image
              src='https://res.cloudinary.com/dhv234qct/image/upload/v1729337575/ywb8h5oubo7hlqrmtjxa.svg'
              alt='Prizes'
              width={40}
              height={40}
            />
            <TextBold>Prize-{Prizes}</TextBold>
          </FlexContainer></div> */}
        </DescriptionCardInner>
        <>
          <Image
            src={ImageURL}
            alt='image'
            width={500}
            height={500}
            className='w-full lg:w-[416px] object-cover mb-4 rounded-2xl'
          />
        </>
      </DescriptionCardContainer>
      <DescriptionBanner Location={Location} Date={Date} Time={Time} Prizes={Prizes} />
    </div>
  );
}

export default DetailsCard;
