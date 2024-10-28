'use client';

import { SwiperSlide } from 'swiper/react';
import PreviewCard from '../CardComponents/PreviewCard';
import { SwiperCarousel } from '@/components/Carousel/Carousel';
import { useState } from 'react';

export const SliderEventsWrapper = ({ previewItems, descriptionItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = () =>
    previewItems.map((item, index) => (
      <SwiperSlide key={index} className={`slide ${index === currentIndex ? 'active-slide' : ''}`}>
        <PreviewCard
          PreviewDescription={item.PreviewDescription}
          ImageURL={item.ImageURL}
          link={item.Rulebook}
        />
      </SwiperSlide>
    ));

  return (
    <SwiperCarousel
      mapFunction={renderSlides}
      desktopViewClassname='mySwiper'
      mobileViewClassName='mySwiper2'
      descriptionItems={descriptionItems}
      onIndexChange={setCurrentIndex}
    />
  );
};
