// import { SliderEventsWrapper } from './Carousel/SliderCarousel/EventWrapper';

import { SliderEventsWrapper } from './Carousel/PreviewCarousel';

// import { SliderEventsWrapper } from './Carousel/PreviewCarousel/EventWrapper';
const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      <SliderEventsWrapper previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
