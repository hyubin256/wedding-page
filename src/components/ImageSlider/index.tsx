"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageListSwiper } from '@/utils/constant';
import Image from 'next/image';
import 'swiper/css';

const ImageSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        scrollbar={{ draggable: true }}
        className="relative w-full h-[calc(100vh-100px)]"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        <div className="swiper-pagination"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center text-3xl lg:text-5xl bg-black/30">
          Huy & Thủy
        </div>
      </Swiper>
    </div>
  )
}

export default ImageSlider
