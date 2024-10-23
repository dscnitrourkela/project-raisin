
// import DualCarousel from './Carousel/DualCarousel/DualCarousel';
import { SliderEventsWrapper } from './Carousel/SliderCarousel/EventWrapper';

const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      <SliderEventsWrapper previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
