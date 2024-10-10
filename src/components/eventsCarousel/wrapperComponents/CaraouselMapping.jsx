import { SliderData } from '@/config/content/eventsCarauselData';
import { EventCard } from '../eventCardComponents/EventCard';
import { useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';

export const CarouselMapping = ({ currentIndex }) => {
  const [scope, animate] = useAnimate();
  const refs = useRef([]);

  useEffect(() => {
    SliderData.forEach((_, index) => {
      const isCurrent = index === currentIndex;
      const isPrev = index === (currentIndex - 1 + SliderData.length) % SliderData.length;
      const isNext = index === (currentIndex + 1) % SliderData.length;
      const isPrevToPrev = index === (currentIndex - 2 + SliderData.length) % SliderData.length;
      const isNextToNext = index === (currentIndex + 2) % SliderData.length;

      let transform = 'translateY(-50px) translateX(-150px)';
      let opacity = 0.3;
      let zIndex = 1;

      if (isPrevToPrev || isNextToNext) {
        (currentIndex === 0 && isPrevToPrev) ||
        (currentIndex === SliderData.length - 1 && isNextToNext)
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

      animate(
        refs.current[index],
        {
          transform,
          opacity,
          zIndex,
        },
        {
          type: 'tween',
          duration: 0.3,
          ease: [0.42, 0, 0.58, 1],
        },
      );
    });
  }, [currentIndex, animate]);

  return (
    <>
      {SliderData.map((item, index) => {
        const isCurrent = index === currentIndex;

        return (
          <div
            key={index}
            className={`w-[456.74px] relative transition-all duration-700 ease-[0.25, 0.1, 0.25, 1] left-[5%] md:left-[8%] lg:left-[12%] xl:left-[19.5%]`}
            ref={(el) => (refs.current[index] = el)}
          >
            <EventCard head={item.head} desc={item.desc} url={item.url} isCurrent={isCurrent} />
          </div>
        );
      })}
    </>
  );
};
