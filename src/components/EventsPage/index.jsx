import EventStructuredData from '@/components/SEO/EventStructureData';
import { SliderEventsWrapper } from './Carousel/PreviewCarousel/EventWrapper';
const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      {descriptionItems.length !== 0 &&
        descriptionItems.map((eventData) => (
          <EventStructuredData
            description={eventData.Description}
            endDate={'2024-11-10T23:59:59+00:00'}
            location={eventData.Location}
            name={eventData.Heading}
            organizerName={'INNOVISION'}
            startDate={'2024-11-08T00:00:00+00:00'}
            key={eventData.Heading}
          />
        ))}
      <SliderEventsWrapper previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
