// components/EventsPage/Carousel/DualCarousel.jsx
import { useState } from 'react';
import PreviewCarousel from '../PreviewCarousel/PreviewCarousel';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import tw, { styled } from 'twin.macro';

const DualCarouselWrapper = styled.div`
  ${tw`flex flex-col items-center gap-y-16 relative w-full py-16`}
`;

const DualCarousel = ({ previewItems, descriptionItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <DualCarouselWrapper>
      <PreviewCarousel items={previewItems} onSlideChange={handleSlideChange} />
      <DescriptionCarousel items={descriptionItems} currentIndex={currentIndex} />
    </DualCarouselWrapper>
  );
};

export default DualCarousel;
