import { SwiperSlide } from 'swiper/react';
import PreviewCard from '../CardComponents/PreviewCard';
import { SwiperCarousel } from '@/components/Carousel/Carousel';
import { useState } from 'react';
import { Wrapper } from '@/components/Carousel/Carousel.styles';
import DescriptionCarousel from './DescriptionCarousel';

export const SliderEventsWrapper = ({ previewItems, descriptionItems, handleRegisterEvent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = () =>
    previewItems.map((item, index) => (
      <SwiperSlide key={index} className={`slide ${index === currentIndex ? 'active-slide' : ''}`}>
        <PreviewCard
          id={item.id}
          PreviewDescription={item.PreviewDescription}
          ImageURL={item.ImageURL}
          handleRegisterEvent={handleRegisterEvent}
        />
      </SwiperSlide>
    ));

  return (
    <Wrapper>
      <SwiperCarousel
        mapFunction={renderSlides}
        desktopViewClassname='mySwiper'
        mobileViewClassName='mySwiper2'
        onIndexChange={setCurrentIndex}
        isEventSection={false}
      />
      <DescriptionCarousel descriptionItems={descriptionItems} currentIndex={currentIndex} />
    </Wrapper>
  );
};
