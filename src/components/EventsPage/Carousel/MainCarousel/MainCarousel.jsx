// components/EventsPage/Carousel/DualCarousel.jsx
import { useState } from 'react';
import PreviewCarousel from '../PreviewCarousel/PreviewCarousel';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import tw, { styled } from 'twin.macro';

const MainCarouselWrapper = styled.div`
  ${tw`flex flex-col items-center gap-y-8 relative w-full py-16`}
`;

const MainCarousel = ({ previewItems, descriptionItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  console.log(previewItems);

  return (
    <MainCarouselWrapper>
      <PreviewCarousel items={previewItems} onSlideChange={handleSlideChange} />
      <DescriptionCarousel items={descriptionItems} currentIndex={currentIndex} />
    </MainCarouselWrapper>
  );
};

export default MainCarousel;
