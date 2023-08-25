import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../scrollbar.css';
import 'swiper/css/navigation';
import PanenTerbaik from '../../assets/images/Panen Terbaik.png';


// import required modules
import { Scrollbar, Navigation} from 'swiper';

export default function App() {
  return (
    <>
      <Swiper
        modules={[Scrollbar, Navigation]}
        navigation
        scrollbar={{
          hide: true,
        }}
        // modules={[Scrollbar]}
        className='MySwiper '
      >
        <SwiperSlide><img src={PanenTerbaik} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
