import { SwiperSlide } from 'swiper/react';
import { EventCard } from '../eventCardComponents/Card';
import '../../EventsPage/Carousel/swiper.css';
import { AllEvents } from '../shared/AllEvents';
import { CardLabel } from '../eventCardComponents/Cardlabel';
import { SwiperCarousel } from '@/components/Carousel/Carousel';
import { useState } from 'react';

export const CardWrapper = () => {
  const [isEventSection] = useState(true);
  const renderSlides = () =>
    AllEvents.map((item, index) => (
      <SwiperSlide key={index}>
        <div className='p-4 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'>
          <EventCard label={item.ImageURL} />
          <CardLabel title={item.Heading} />
        </div>
      </SwiperSlide>
    ));

  return (
    <SwiperCarousel
      mapFunction={renderSlides}
      onIndexChange={null}
      desktopViewClassname='mySwiper3'
      mobileViewClassName='mySwiper4'
      isEventSection={isEventSection}
    />
  );
};
