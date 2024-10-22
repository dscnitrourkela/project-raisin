import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewCard from '../../CardComponents/PreviewCard';
import { Pagination } from 'swiper/modules';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import 'swiper/css/pagination';
// import { previewItems } from '@/config/content/EventsPage/MainEvents/Data';
export const MobileView = ({
  onSlideChange,
  swiperRef,
  currentIndex,
  previewItems,
  descriptionItems,
}) => {
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        onSlideChange={onSlideChange}
        modules={[Pagination]}
        className='mySwiper2'
      >
        {previewItems.map((item, index) => (
          <SwiperSlide key={index}>
            <PreviewCard PreviewDescription={item.PreviewDescription} ImageURL={item.ImageURL} />
          </SwiperSlide>
        ))}
      </Swiper>
      <DescriptionCarousel descriptionItems={descriptionItems} currentIndex={currentIndex} />
    </>
  );
};
