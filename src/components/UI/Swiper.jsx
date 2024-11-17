import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Head2 from './Head2';

const SwiperSlider = () => {
  return (
    <div className='pad80'>
      <div className='container'>
        <div className='text-center'>
          <Head2>Our Partners</Head2>
        </div>
        <Swiper
          className='overflow-hidden'
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          centeredSlides={true}
          breakpoints={{
            // Settings for different screen sizes
            320: {
              slidesPerView: 1, // Show 1 slide on small screens (phones)
            },
            576: {
              slidesPerView: 2, // Show 2 slides on larger phones
            },
            768: {
              slidesPerView: 3, // Show 3 slides on tablets
            },
            992: {
              slidesPerView: 4, // Show 4 slides on medium screens
            },
            1200: {
              slidesPerView: 5, // Show 5 slides on large screens
            },
          }}
        >
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://www.hubspot.com/hs-fs/hubfs/coca%20cola.png?width=400&height=400&name=coca%20cola.png"
                alt="First slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png"
                alt="Second slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://mbluxury1.s3.amazonaws.com/2022/02/25173210/louis-vitton-1.jpg"
                alt="Third slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi84iuDjRQz6FKaFClc9gV_ox3Tx1LwgbctQ&s"
                alt="Fourth slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR3KlGRHEX6_YiNvYDjScm1q0LKHLtDL5NQ&s"
                alt="Fifth slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://banner2.cleanpng.com/20180522/kza/avqf50bm7.webp"
                alt="Sixth slide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='partner-logo'>
              <img
                className="d-block w-100"
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190900/Gucci.png"
                alt="Seventh slide"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
