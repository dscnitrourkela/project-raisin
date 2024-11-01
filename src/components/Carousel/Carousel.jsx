'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ScreenViewContainer, SliderContainer, Wrapper } from './Carousel.styles';
import { LeftArrowButton, RightArrowButton } from '../EventsPage/Shared/ArrowButton';
import '../EventsPage/Carousel/swiper.css';

export const SwiperCarousel = ({
  mapFunction,
  mobileViewClassName,
  desktopViewClassname,
  onIndexChange,
  isEventSection,
}) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const slideWidth = 456.74;

  useEffect(() => {
    const updateScreenSize = () => setIsMobile(window.innerWidth < 900);
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleNext = () => swiperRef.current?.swiper.slideNext();
  const handlePrev = () => swiperRef.current?.swiper.slidePrev();

  const onSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setCurrentIndex(newIndex);
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  };

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        { duration: 7, ease: [0.42, 0, 0.58, 1], type: 'tween' },
      );
    }
  }, [currentIndex, animate, scope]);

  return (
    <Wrapper>
      <ScreenViewContainer>
        <LeftArrowButton
          onClick={handlePrev}
          style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 10 }}
        />
        <SliderContainer>
          <Swiper
            ref={swiperRef}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides
            loop
            spaceBetween={isMobile ? 30 : 0}
            onSlideChange={onSlideChange}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: isEventSection ? 3000 : 15000, disableOnInteraction: false }}
            className={isMobile ? mobileViewClassName : desktopViewClassname}
          >
            {mapFunction()}
          </Swiper>
        </SliderContainer>
        <RightArrowButton
          onClick={handleNext}
          style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 10 }}
        />
      </ScreenViewContainer>
    </Wrapper>
  );
};
