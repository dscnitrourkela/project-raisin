'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { SButtons } from '../utils/SliderButtons';
import { CarouselMapping } from './CaraouselMapping';
import { SliderData } from '@/config/content/eventsCarauselData';

import { SliderContainer, Wrapper } from './EventWrapper.styles';
import { MobileViewSwipe } from '../utils/SwiperforPhone/ForMobileview';

export const SliderEventsWrapper = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const slideWidth = 456.74;

  const handleNext = () => {
    if (isMobile && swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    }
  };

  const handlePrev = () => {
    if (isMobile && swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1));
    }
  };

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        {
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  return !isMobile ? (
    <Wrapper>
      <SliderContainer>
        <div
          ref={scope}
          className='flex gap-8 mt-64 transition-transform'
          style={{
            width: `${SliderData.length * slideWidth}px`,
            transform: `translateX(calc(50% - ${slideWidth / 2}px))`,
          }}
        >
          <CarouselMapping currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </SliderContainer>
      <SButtons fn1={handlePrev} fn2={handleNext} currentindex={currentIndex} />
    </Wrapper>
  ) : (
    <MobileViewSwipe
      handlePrev={handlePrev}
      handleNext={handleNext}
      onSlideChange={onSlideChange}
      swiperRef={swiperRef}
      currentIndex={currentIndex}
    />
  );
};
