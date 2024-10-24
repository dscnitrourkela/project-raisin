import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewCard from '../../CardComponents/PreviewCard';
import { Pagination } from 'swiper/modules';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import { SliderContainer } from './EventWrapper.styles';
import './swiper.css';
import 'swiper/css/pagination';

export const LargeScreenView = ({ onSlideChange, swiperRef, currentIndex, previewItems }) => {
  return (
    <>
      <SliderContainer>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={0}
          onSlideChange={onSlideChange}
          modules={[Pagination]}
          className='mySwiper'
        >
          {previewItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`slide ${index === currentIndex ? 'active-slide' : ''}`}
            >
              <PreviewCard PreviewDescription={item.PreviewDescription} ImageURL={item.ImageURL} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <DescriptionCarousel descriptionItems={descriptionItems} currentIndex={currentIndex} /> */}
      </SliderContainer>
    </>
  );
};
