import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const Gallery = ({ images }) => {
  return (
    <div className='w-full px-4'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        className='mySwiper'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full pt-[66.67%] rounded-lg overflow-hidden mb-20'>
              <Image
                src={image.src}
                alt={image.alt}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-slide {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
