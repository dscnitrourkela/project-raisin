'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
// import { SliderData } from '@/config/content/eventsCarauselData';
import { LeftArrowButton, RightArrowButton } from '../../Shared/ArrowButton';
import { MobileView } from './MobileView';
import { LargeScreenView } from './DesktopView';
import { LargeScreenViewContainer, Wrapper } from './EventWrapper.styles';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';

export const SliderEventsWrapper = ({ previewItems, descriptionItems }) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const slideWidth = 456.74;

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
    resetAutoSlide();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
    resetAutoSlide();
  };

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      swiperRef.current.swiper.slideNext();
    }, 15000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    !isMobile ? startAutoSlide() : '';
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        {
          duration: 7,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  return !isMobile ? (
    <Wrapper>
      <LargeScreenViewContainer>
        <LeftArrowButton
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            zIndex: 10,
          }}
        />
        <LargeScreenView
          onSlideChange={onSlideChange}
          swiperRef={swiperRef}
          currentIndex={currentIndex}
          previewItems={previewItems}
          descriptionItems={descriptionItems}
        />
        <RightArrowButton
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            zIndex: 10,
          }}
        />
      </LargeScreenViewContainer>
      <DescriptionCarousel descriptionItems={descriptionItems} currentIndex={currentIndex} />
    </Wrapper>
  ) : (
    <MobileView
      onSlideChange={onSlideChange}
      swiperRef={swiperRef}
      currentIndex={currentIndex}
      previewItems={previewItems}
      descriptionItems={descriptionItems}
    />
  );
};
