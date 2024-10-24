'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EventCard } from '../eventCardComponents/Card';
import '../../EventsPage/Carousel/SliderCarousel/swiper.css';
import { AllEvents } from '../shared/AllEvents';
import { CardLabel } from '../eventCardComponents/Cardlabel';

export const CardWrapper = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const slideWidth = 456.74;

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
      resetAutoSlide();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
      resetAutoSlide();
    }
  };

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    if (!isMobile) {
      startAutoSlide();
    }
    return () => {
      if (autoSlideIntervalRef.current && !isMobile) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        {
          duration: 6,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);
  return (
    <>
      {!isMobile ? (
        <div className=''>
          <Swiper
            ref={swiperRef}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={0}
            modules={[Pagination]}
            onSlideChange={onSlideChange}
            className='mySwiper3 '
          >
            {AllEvents.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'>
                  <EventCard label={item.ImageURL} />
                  <CardLabel title={item.Heading} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          modules={[Pagination]}
          onSlideChange={onSlideChange}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          className='mySwiper4'
        >
          {AllEvents.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                <div className='p-2 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'>
                  <EventCard label={item.ImageURL} />
                  <CardLabel title={item.Heading} />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      )}
    </>
  );
};
