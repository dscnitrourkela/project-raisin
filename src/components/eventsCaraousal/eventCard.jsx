import { Desc } from './paragraph';
import { DescriptionHeader } from './Header';
import { EventImage } from './image';
import { ParentEventCardComponent } from './parent';
import { CarouselButton } from '../shared/Typography/Buttons';

export const EventCard = ({ head, url, desc }) => {
  return (
    <>
      <ParentEventCardComponent>
        <EventImage imgurl={url} />
        <DescriptionHeader label={head} />
        <Desc label={desc} />
        <div className='flex justify-end mt-16'>
          <CarouselButton>REGISTER</CarouselButton>
        </div>
      </ParentEventCardComponent>
    </>
  );
};
