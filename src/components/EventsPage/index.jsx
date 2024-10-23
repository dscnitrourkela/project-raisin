import { SliderEventsWrapper } from './Carousel/PreviewCarousel/EventWrapper';
const MainCarousel = ({ previewItems, descriptionItems }) => {
  return (
    <>
      <SliderEventsWrapper previewItems={previewItems} descriptionItems={descriptionItems} />
    </>
  );
};

export default MainCarousel;
