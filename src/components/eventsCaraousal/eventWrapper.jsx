'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { SButtons } from './sliderButtons';
import { CarouselMapping } from './caraouselMapping';
import { sliderData } from '@/config/content/eventsCarauselData';
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { EventCard } from './eventCard';

export const SliderEventsWrapper = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null); // Ref for Swiper instance

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }
  };

  const handlePrev = () => {
    if (isMobile && swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
    }
  };

  // This function will update the currentIndex based on the active slide
  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  return !isMobile ? (
    <div className='w-[100%] min-h-screen h-auto flex flex-col'>
      <div className='pb-5 overflow-x-hidden overflow-y-visible relative'>
        <div
          ref={scope}
          className='flex mt-64 transition-transform'
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
  ) : (
    <div className='flex flex-col gap-10'>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        onSlideChange={onSlideChange} // Update currentIndex on slide change
        modules={[Pagination]}
        className='mySwiper'
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <EventCard head={item.head} desc={item.desc} url={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SButtons fn1={handlePrev} fn2={handleNext} currentindex={currentIndex} />
    </div>
  );
};
