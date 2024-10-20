'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
// import { SliderData } from '@/config/content/eventsCarauselData';
// import { LeftArrowButton, RightArrowButton } from '../../Shared/ArrowButton';
// import { MobileView } from './MobileView';
// import { LargeScreenView } from './BigScreenView';
// import { Wrapper } from './EventWrapper.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EventCard } from '../eventCardComponents/EventCard';
// import { CardLabel } from '../eventCardComponents/Cardlabel';
// import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import '../../EventsPage/Carousel/PreviewCarousel/swiper.css';

export const CardWrapper = ({ items }) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const slideWidth = 456.74;

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleNext = () => {
    if (isMobile) {
      swiperRef.current.swiper.slideNext();
      resetAutoSlide();
    }
  };

  const handlePrev = () => {
    if (!isMobile) {
      swiperRef.current.swiper.slidePrev();
      resetAutoSlide();
    }
  };

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      swiperRef.current.swiper.slidePrev();
    }, 5000);
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
      if (autoSlideIntervalRef.current && !isMobile) {
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
          duration: 0.3,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  return (
    <>
      <div className='overflow-hidden'>
        {!isMobile ? (
          <Swiper
            ref={swiperRef}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={0}
            modules={[Pagination]}
            onSlideChange={onSlideChange}
            // autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 3s delay
            className='mySwiper3'
          >
            {item.map((singleItem, index) => (
              <SwiperSlide
                key={index}
                className={`slide ${index === currentIndex ? 'active-slide' : ''}`}
              >
                <div className=' p-4 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'>
                  <EventCard label={singleItem} />
                  {/* <CardLabel /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={onSlideChange}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className='mySwiper4'
          >
            {item.map((singleItem, index) => (
              <SwiperSlide
                key={index}
                // className={`slide ${index === currentIndex ? 'active-slide' : ''}`}
              >
                <div className=' p-4 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'>
                  <EventCard label={singleItem} />
                  {/* <CardLabel /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

const item = ['FLAGSHIP', 'GUEST LECTURE', 'MAIN EVENTS', 'SHOWS AT DTS', 'EXHIBITION'];
