// import { sliderData } from '@/app/config/content/sliderData';
import { sliderData } from '@/config/content/eventsCarauselData';
import { EventCard } from './eventCard';
import { motion, /* useMotionValue, */ useAnimation } from 'framer-motion';

export const CarouselMapping = ({ currentIndex, setCurrentIndex }) => {
  // const dragX = useMotionValue(0);
  const controls = useAnimation();

  // const handleDragEnd = (event, info) => {
  //   const dragVelocity = info.velocity.x;
  //   const dragDistance = dragX.get();

  //   if (dragDistance < -150 || dragVelocity < -500) {
  //     if (currentIndex < sliderData.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   } else if (dragDistance > 150 || dragVelocity > 500) {
  //     if (currentIndex > 0) {
  //       setCurrentIndex(currentIndex - 1);
  //     }
  //   }

  //   controls.start({ x: 0 });
  // };

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
          opacity = 0;
          zIndex = 0;
        }

        if (isPrev) {
          transform = 'translateY(-50px) translateX(150px)';
          opacity = 0.3;
          zIndex = 10;
        }

        if (isNext) {
          transform = 'translateY(-50px) translateX(-150px)';
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
            className={`w-[456.74px] left-[20%] relative transition-all duration-700 ease: [0.25, 0.1, 0.25, 1] `}
            style={{ transform, opacity, zIndex }}
            transition={{ type: 'tween' }}
            drag='x'
            dragElastic={0.1}
            dragConstraints={{ left: 0, right: 0 }}
            // onDragEnd={handleDragEnd}
            animate={controls}
          >
            <EventCard head={item.head} desc={item.desc} url={item.url} />
          </motion.div>
        );
      })}
    </>
  );
};
