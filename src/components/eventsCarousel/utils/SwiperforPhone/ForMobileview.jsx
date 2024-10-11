import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperConatiner } from '../../wrapperComponents/EventWrapper.styles';
import { SButtons } from '../SliderButtons';
import { Pagination } from 'swiper/modules';
import { EventCard } from '../../eventCardComponents/EventCard';
import { SliderData } from '@/config/content/eventsCarauselData';
import './swiper.css';
import 'swiper/css/pagination';

export const MobileViewSwipe = ({
  handleNext,
  handlePrev,
  onSlideChange,
  swiperRef,
  currentIndex,
}) => {
  return (
    <>
      <div>
        <SwiperConatiner>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            Pagination={{
              clickable: true,
            }}
            onSlideChange={onSlideChange}
            modules={[Pagination]}
            className='mySwiper'
          >
            {SliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <EventCard head={item.head} desc={item.desc} url={item.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SButtons fn1={handlePrev} fn2={handleNext} currentindex={currentIndex} />
        </SwiperConatiner>
      </div>
    </>
  );
};
