import { SwiperSlide } from 'swiper/react';
import PreviewCard from '../CardComponents/PreviewCard';
import { SwiperCarousel } from '@/components/Carousel/Carousel';
import { useState } from 'react';
import { Wrapper } from '@/components/Carousel/Carousel.styles';
import DescriptionCarousel from './DescriptionCarousel';

export const SliderEventsWrapper = ({
  EventItem,
  handleRegisterEvent,
  loading,
  registeredEvents,
  isCurrentSlideId,

}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderSlides = () =>
    EventItem.map((item, index) => (
      <SwiperSlide key={index} className={`slide ${index === currentIndex ? 'active-slide' : ''}`}>
        <PreviewCard
          id={item.eventID}
          PreviewDescription={item.Description}
          ImageURL={item.ImageURL}
          handleRegisterEvent={handleRegisterEvent}
          loading={loading}
          link={item.Rulebook}
          registeredEvents={registeredEvents}
          isCurrentId={isCurrentSlideId}
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
        registeredEvents={registeredEvents}
      />
      <DescriptionCarousel descriptionItems={EventItem} currentIndex={currentIndex} />
    </Wrapper>
  );
};
