import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import carousel1 from '../../public/Images/Carousel/carousel1.png';
import carousel2 from '../../public/Images/Carousel/carousel2.png';

export default function PortfolioSlider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={carousel1} alt="image 1" className="h-full w-full object-cover"/></SwiperSlide>
        <SwiperSlide><img src={carousel2} alt="image 2" className="h-full w-full object-cover"/></SwiperSlide>
        <SwiperSlide><img src={carousel2} alt="image 3" className="h-full w-full object-cover"/></SwiperSlide>
      </Swiper>
    </>
  );
}
