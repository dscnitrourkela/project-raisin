import { AllEvents } from '@/components/EventsSection/wrapperComponents/AllEvents';
import { GalleryCard } from './card';
import { useEffect, useRef, useState } from 'react';
import { GalleryData } from '@/config/content/EventsPage/GalleryData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export const GalleryWrapper = () => {
  const [cardSizes, setCardSizes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 820);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const sizes = AllEvents.map(() => ({
      width: getRandomSize(1, 2),
    }));
    setCardSizes(sizes);
  }, []);

  return !isMobile ? (
    <div
      className='relative w-full'
      style={{
        padding: '1rem',
      }}
    >
      <div className='flex flex-wrap gap-6 justify-start'>
        {GalleryData.map((item, index) => (
          <div
            key={index}
            className='rounded-lg overflow-hidden'
            style={{
              width: `${cardSizes[index]?.width === 2 ? '32%' : '16%'}`,
              minHeight: '300px',
              flexGrow: 1,
            }}
          >
            <GalleryCard label={item} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Swiper
      ref={swiperRef}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      modules={[Pagination, Autoplay]}
      // pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className='gallery-swiper'
    >
      {GalleryData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='rounded-lg overflow-hidden w-full h-[300px] xsm:h-[350px] sm:h-[450px] p-0 flex justify-center items-center  '>
            <GalleryCard label={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
