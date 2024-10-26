import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export const SubHeader = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [daysCount, setDaysCount] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  useEffect(() => {
    if (isInView) {
      let eventsStart = 0;
      let daysStart = 0;

      const eventsInterval = setInterval(() => {
        if (eventsStart < 59) {
          eventsStart += 1;
          setEventsCount(eventsStart);
        } else {
          clearInterval(eventsInterval);
          setEventsCount('60+');
        }
      }, 23);

      const daysInterval = setInterval(() => {
        if (daysStart < 3) {
          daysStart += 1;
          setDaysCount(daysStart);
        } else {
          clearInterval(daysInterval);
        }
      }, 150);

      return () => {
        clearInterval(eventsInterval);
        clearInterval(daysInterval);
      };
    }
  }, [isInView]);

  return (
    <>
      <div className='h-auto w-full' ref={ref}>
        <div className='h-[80px] border-1 border-[#ffffff48] flex flex-col md:flex-row justify-center items-center  md:gap-36 bg-white bg-opacity-[2%] py-[20px]'>
          <motion.div className='font-spaceX font-normal text-[17px] xsm:text-[24px] leading-[36,67] text-white'>
            TOTaL EvENTS {eventsCount}
          </motion.div>
          <motion.div className='font-spaceX font-normal text-[17px] xsm:text-[24px] leading-[36,67] text-white'>
            TOTaL DayS {daysCount}
          </motion.div>
        </div>
      </div>
    </>
  );
};
