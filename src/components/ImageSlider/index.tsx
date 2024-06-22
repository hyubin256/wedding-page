"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageListSwiper } from '@/utils/constant';
import Image from 'next/image';
import 'swiper/css';

const ImageSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="relative w-full h-[calc(100vh-100px)]"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
        autoplay
      >
        {ImageListSwiper.map((imageItem, index) => {
          return (
            <SwiperSlide key={imageItem.id} className="h-full relative z-[1]">
              <Image
                src={imageItem.url}
                alt="image-swiper"
                width={1920}
                height={450}
                className="h-full object-cover"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageSlider
