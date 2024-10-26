'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { EventCard } from '../eventCardComponents/Card';
import '../../EventsPage/Carousel/swiper.css';
import { AllEvents } from '../shared/AllEvents';
import { CardLabel } from '../eventCardComponents/Cardlabel';

export const CardWrapper = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  const slideWidth = 456.74;

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

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
          duration: 6,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 1 : 'auto'}
        centeredSlides={true}
        loop={true}
        spaceBetween={isMobile ? 30 : 0}
        modules={[Pagination, Autoplay]}
        onSlideChange={onSlideChange}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={isMobile ? 'mySwiper4' : 'mySwiper3'}
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
    </>
  );
};
