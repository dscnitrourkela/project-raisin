import { EventCardBg } from '@/config/content/eventsCarauselData';
import { EventImage } from '../utils/Image';
import { ParentEventCardComponent } from './Parent';
// import { CarouselButton } from '../../shared/Typography/Buttons';

import { CarouselButton, CarouselHead, CarouselParagraph } from './eventCard.style';

export const EventCard = ({ head, url, desc }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${EventCardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ParentEventCardComponent>
          <EventImage imgurl={url} alt={head} />
          <CarouselHead>{head}</CarouselHead>
          <CarouselParagraph>{desc}</CarouselParagraph>
          <div className='flex justify-end mt-16'>
            <CarouselButton>REGISTER</CarouselButton>
          </div>
        </ParentEventCardComponent>
      </div>
    </>
  );
};
