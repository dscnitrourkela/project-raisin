import { EventImage } from './image';
import { ParentEventCardComponent } from './parent';
import { CarouselButton } from '../shared/Typography/Buttons';
import { Heading2 } from '../shared/Typography/Headings';
import { EventCaraouselParagraph } from '../shared/Typography/Paragraphs';

export const EventCard = ({ head, url, desc }) => {
  return (
    <>
      <ParentEventCardComponent>
        <EventImage imgurl={url} alt={head} />
        <Heading2>{head}</Heading2>
        <EventCaraouselParagraph>{desc}</EventCaraouselParagraph>
        <div className='flex justify-end mt-16'>
          <CarouselButton>REGISTER</CarouselButton>
        </div>
      </ParentEventCardComponent>
    </>
  );
};
