'use client';
import { useState, useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { SButtons } from './sliderButtons';
import { CarouselMapping } from './caraouselMapping';
import { sliderData } from '@/config/content/eventsCarauselData';

export const SliderEventsWrapper = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 456.74;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const xOffset = -currentIndex * slideWidth;
    animate(
      scope.current,
      { x: xOffset },
      {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        type: 'tween',
      },
    );
  }, [currentIndex, animate, scope]);

  return (
    <div className='w-full min-h-screen h-auto p-10 flex flex-col items-center'>
      <div className='w-full overflow-x-hidden overflow-y-visible relative'>
        <div
          ref={scope}
          className='flex items-center justify-center gap-10 mt-64 transition-transform'
          style={{
            width: `${sliderData.length * slideWidth}px`,
            transform: `translateX(calc(50% - ${slideWidth / 2}px))`,
          }}
        >
          <CarouselMapping currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
      <SButtons fn1={handlePrev} fn2={handleNext} currentindex={currentIndex} />
    </div>
  );
};
