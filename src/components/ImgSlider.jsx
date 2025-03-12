import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slideImg1 from '../assets/engineering.jpg';
import slideImg2 from '../assets/engineering1.jpg';
import slideImg3 from '../assets/engineering2.jpg';
import '../styles/ImgSlider.css'; // Import the custom CSS

const ImgSlider = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', height: '100vh', alignContent: 'center', textAlign: 'center', fontFamily: 'fantasy' }}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          key="slide-1"
          style={{ position: 'relative', textAlign: 'center' }}
        >
          <div
            className="bottom-left"
            style={{
              zIndex: '1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
            }}
          >
            <h1 style={{ margin: '0px' }}>
              <span>Constructing </span>
              <span style={{ color: theme.palette.primary.main, fontSize: '50px' }}>Confidence</span>
              <p style={{ margin: '0px' }}>
                <span>through</span>
                <span style={{ color: theme.palette.primary.main, fontSize: '50px' }}> Excellence</span>
              </p>
            </h1>
          </div>
          <img src={slideImg1} alt="Slide 1" style={{ filter: 'grayscale(0.5)', width: '100%', height: '100vh', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide key="slide-2">
          <div
            className="bottom-left"
            style={{
              zIndex: '1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
            }}
          >
            <h1>
              <span>Foundation of</span>
              <span style={{ color: theme.palette.primary.main, fontSize: '50px' }}> Trust</span>
              <p style={{ margin: '0px' }}>
                <span>Built with </span>
                <span style={{ color: theme.palette.primary.main, fontSize: '50px' }}>Excellence </span>
              </p>
            </h1>
          </div>
          <img src={slideImg2} alt="Slide 2" style={{ filter: 'grayscale(0.5)', width: '100%', height: '100vh', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide key="slide-3">
          <div
            className="bottom-left"
            style={{
              zIndex: '1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
            }}
          >
            <h1>
              <span style={{ color: theme.palette.primary.main, fontSize: '50px' }}>Excellence</span> in every Structure
            </h1>
          </div>
          <img src={slideImg3} alt="Slide 3" style={{ filter: 'grayscale(0.5)', width: '100%', height: '100vh', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ImgSlider;