// components/EventsPage/Carousel/MainCarousel.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeftArrowButton, RightArrowButton } from '../../Shared/ArrowButton';
import PreviewCard from '../../CardComponents/PreviewCard/PreviewCard';
import tw, { styled } from 'twin.macro';

const PreviewCarouselContainer = styled.div`
  ${tw` w-full overflow-hidden`}
  height: 605.44px;
`;

const PreviewSlideContainer = styled(motion.div)`
  ${tw`flex justify-center left-0 w-full`}
`;

const PreviewCarousel = ({ items, onSlideChange }) => {
  const [current, setCurrent] = useState(0); // Initialize current as a single number
  const [direction, setDirection] = useState(0); // Initialize direction separately

  const paginate = (newDirection) => {
    const newIndex = (current + newDirection + items.length) % items.length;
    setCurrent(newIndex);
    setDirection(newDirection); // Update the direction separately
    onSlideChange(newIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'absolute',
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
  };
  return (
    <PreviewCarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <PreviewSlideContainer
          key={current}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <PreviewCard {...items[current]} />
        </PreviewSlideContainer>
      </AnimatePresence>
      <LeftArrowButton position='left' onClick={() => paginate(-1)} aria-label='Previous Slide' />
      <RightArrowButton position='right' onClick={() => paginate(1)} aria-label='Next Slide' />
    </PreviewCarouselContainer>
  );
};

export default PreviewCarousel;
