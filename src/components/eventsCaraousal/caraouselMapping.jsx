import { useState, useEffect } from 'react';
import { sliderData } from '@/config/content/eventsCarauselData';
import { EventCard } from './eventCard';
import { motion, useAnimation } from 'framer-motion';

export const CarouselMapping = ({ currentIndex, setCurrentIndex }) => {
  const controls = useAnimation();

  return (
    <>
      {sliderData.map((item, index) => {
        const isCurrent = index === currentIndex;
        const isPrev = index === (currentIndex - 1 + sliderData.length) % sliderData.length;
        const isNext = index === (currentIndex + 1) % sliderData.length;
        const isPrevToPrev = index === (currentIndex - 2 + sliderData.length) % sliderData.length;
        const isNextToNext = index === (currentIndex + 2) % sliderData.length;

        let transform = 'translateY(-50px) translateX(-150px)';
        let opacity = 0.3;
        let zIndex = 1;

        if (isPrevToPrev || isNextToNext) {
          (currentIndex === 0 && isPrevToPrev) ||
          (currentIndex === sliderData.length - 1 && isNextToNext)
            ? (opacity = 0.3)
            : (opacity = 0);
          zIndex = 0;
        }

        if (isPrev) {
          transform = 'translateY(-50px) translateX(100px)';
          opacity = 0.3;
          zIndex = 10;
        }

        if (isNext) {
          transform = 'translateY(-50px) translateX(-100px)';
          opacity = 0.3;
          zIndex = 10;
        }

        if (isCurrent) {
          transform = 'translateY(0)';
          opacity = 1;
          zIndex = 51;
        }

        return (
          <motion.div
            key={index}
            className={`w-[456.74px] relative transition-all duration-700 ease-[0.25, 0.1, 0.25, 1] left-[5%] md:left-[8%] lg:left-[12%] xl:left-[19.5%]`}
            style={{ transform, opacity, zIndex }}
            transition={{ type: 'tween' }}
            animate={controls}
          >
            <EventCard head={item.head} desc={item.desc} url={item.url} />
          </motion.div>
        );
      })}
    </>
  );
};
