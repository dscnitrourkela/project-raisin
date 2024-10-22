// import DualCarousel from './Carousel/DualCarousel/DualCarousel';
import { SliderEventsWrapper } from './Carousel/PreviewCarousel/EventWrapper';
import SEO from '../SEO';

const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      <SEO
        title='Awesome College Event 2024 | Your College Name'
        description='Join us for the biggest college event of the year! Featuring workshops, competitions, and networking opportunities.'
        ogImage='https://yourcollege.edu/event-image.jpg'
        ogUrl='https://yourcollege.edu/awesome-event-2024'
      />

      <SliderEventsWrapper previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
