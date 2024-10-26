'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { LeftArrowButton, RightArrowButton } from '../Shared/ArrowButton';
import DescriptionCarousel from './DescriptionCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import PreviewCard from '../CardComponents/PreviewCard';
import './swiper.css';
import { LargeScreenViewContainer, SliderContainer, Wrapper } from './PreviewCarousel.styles';

export const SliderEventsWrapper = ({ previewItems, descriptionItems }) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
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
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
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
          duration: 7,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  return (
    <>
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
          <SliderContainer>
            <Swiper
              ref={swiperRef}
              slidesPerView={isMobile ? 1 : 3}
              centeredSlides={true}
              loop={true}
              spaceBetween={isMobile ? 30 : 0}
              onSlideChange={onSlideChange}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 15000, disableOnInteraction: false }}
              className={isMobile ? 'mySwiper2' : 'mySwiper'}
            >
              {previewItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`slide ${index === currentIndex ? 'active-slide' : ''}`}
                >
                  <PreviewCard
                    PreviewDescription={item.PreviewDescription}
                    ImageURL={item.ImageURL}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderContainer>
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
    </>
  );
};
