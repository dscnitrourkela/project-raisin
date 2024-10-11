import { SliderData } from '@/config/content/eventsCarauselData';
import { EventCard } from '../eventCardComponents/EventCard';
import { motion } from 'framer-motion';

export const CarouselMapping = ({ currentIndex }) => {
  return (
    <>
      {SliderData.map((item, index) => {
        const isCurrent = index === currentIndex;
        const isPrev = index === (currentIndex - 1 + SliderData.length) % SliderData.length;
        const isNext = index === (currentIndex + 1) % SliderData.length;
        const isPrevToPrev = index === (currentIndex - 2 + SliderData.length) % SliderData.length;
        const isNextToNext = index === (currentIndex + 2) % SliderData.length;

        let transform = '';
        let opacity = 0.3;
        let zIndex = 1;
        let scale = 1;

        if (isPrevToPrev || isNextToNext) {
          (currentIndex === 0 && isPrevToPrev) ||
          (currentIndex === SliderData.length - 1 && isNextToNext)
            ? (opacity = 0.3)
            : (opacity = 0);
          zIndex = 0;
        }

        if (isPrev) {
          transform = 'translateX()';
          opacity = 0.3;
          zIndex = 10;
          scale = 1;
        }

        if (isNext) {
          transform = ' translateX()';
          opacity = 0.3;
          zIndex = 10;
          scale = 1;
        }

        if (isCurrent) {
          transform = 'translateY(0)';
          opacity = 1;
          zIndex = 51;
        }

        return (
          <motion.div
            key={index}
            className='w-full  relative transition-all duration-700 ease-[0.25, 0.1, 0.25, 1] left-[5%] md:left-[8%] lg:left-[12%] xl:left-[19.5%]'
            style={{
              zIndex,
              scale,
            }}
            animate={{
              transform,
              opacity,
            }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <EventCard head={item.head} desc={item.desc} url={item.url} isCurrent={isCurrent} />
          </motion.div>
        );
      })}
    </>
  );
};
