// import { BannerData } from '@/config/content/EventsPage/bannerData';
import { BannerData } from '@/config/content/EventsPage/BannerData';
import { DescriptionCardBottom } from '../CardComponents/DetailsCard.style';
import { Container, FlexContainer, StyledImage, TextBold } from './banner.styles';

export const DescriptionBanner = ({ Prizes, Location, Time, Date }) => {
  const data = BannerData(Prizes, Location, Time, Date);

  return (
    <Container>
      <DescriptionCardBottom>
        {data.map((items, index) => (
          <div key={index}>
            <FlexContainer>
              <StyledImage src={items.Url} alt={items.Title} width={60} height={60} />
              <TextBold>{items.Title}</TextBold>
            </FlexContainer>
          </div>
        ))}
      </DescriptionCardBottom>
    </Container>
  );
};
