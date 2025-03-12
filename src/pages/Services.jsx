import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, StepContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import futureImg from '../assets/img5.jpg';
import foundationsImg from '../assets/img4.jpg';
import cultureImg from '../assets/img6.jpg';
import ServicesHeader from '../components/ServicesHeader';

const steps = [
  { label: 'Constructing the Future', description: 'Creating for the Future entails adopting a progressive mindset in construction, emphasizing the use of sustainable materials and techniques designed to stand the test of time.', image: futureImg },
  { label: 'Building Solid Foundations', description: 'Building Solid Foundations and Fostering Relationships.', image: foundationsImg },
  { label: 'Our Culture', description: 'Our culture is built on a foundation of integrity, respect, and collaboration. We believe in fostering a positive and inclusive work environment where every team member is valued and empowered to contribute to our collective success.', image: cultureImg },
];

function Services() {
  const [activeStep, setActiveStep] = React.useState(0);
  const swiperRef = React.useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleStepClick = (index) => {
    setActiveStep(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <>
    <ServicesHeader/>
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: isMobile ? '20px' : '100px', marginTop: '60px' }}>
  
      <Box sx={{ width: isMobile ? '100%' : '30%', marginRight: isMobile ? '0' : '20px', marginBottom: isMobile ? '20px' : '0' }}>
        <Stepper activeStep={activeStep} orientation={isMobile ? 'horizontal' : 'vertical'}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel onClick={() => handleStepClick(index)}>
                <Typography variant="h6" sx={{ cursor: 'pointer' }}>{step.label}</Typography>
              </StepLabel>
              {!isMobile && (
                <StepContent>
                  <Typography variant="body2" sx={{ marginTop: '10px' }}>
                    {step.description}
                  </Typography>
                </StepContent>
              )}
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: isMobile ? '100%' : '70%' }}>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
          className="mySwiper"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <Box>
                <CardMedia
                  component="img"
                  height="400"
                  image={step.image}
                  alt={step.label}
                  sx={{ marginBottom: '20px', borderRadius: '8px' }}
                />
                <Typography variant="h4" component="h1" sx={{ color: theme.palette.primary.main, fontFamily: 'fantasy', padding: '20px' }}>
                  {step.label}
                </Typography>
                <Typography variant="body1" sx={{ padding: '20px', textAlign: 'justify' }}>
                  {step.description}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      </Box>
      </> 
      );
    
}

export default Services;