import React from 'react';
import { Box, Typography, CardMedia, Grid2 } from '@mui/material';
import futureImg from '../assets/img5.jpg';
import foundationsImg from '../assets/img4.jpg';
import cultureImg from '../assets/img6.jpg';
import  ImgSlider from '../components/ImgSlider';

function Home() {
  return (

    <Box sx={{}}>
         <ImgSlider />
      <Grid2 container spacing={4}>
        <Grid2 item xs={12}>
          <Box
            sx={{
              padding: '20px',
              width: '100%',
              height: 'auto',
              alignItems: 'center',
              backgroundColor: 'white',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              marginBottom: '20px',
              transition: 'transform 0.3s ease-in-out',
              // '&:hover': {
              //   transform: 'scale(1.05)',
              //   boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
              // },
            }}
          >
            <Typography variant="h4" component="h1" sx={{ color: 'chocolate', fontFamily: 'fantasy', padding: '20px' }}>
              Constructing the Future
            </Typography>
            <Typography variant="body1" sx={{ padding: '20px', textAlign: 'justify' }}>
              <span style={{ color: 'chocolate' }}>Creating for the Future</span> entails adopting a progressive mindset in construction, emphasizing the use of sustainable materials and techniques designed to stand the test of time. This approach signifies a dedication to developing environments that cater to current needs while remaining adaptable to the ever-changing requirements of the future, thereby guaranteeing a durable legacy of efficiency and strength.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: '#f5f5f5',
              padding: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={foundationsImg}
              alt="Building Solid Foundations"
              sx={{ marginBottom: '20px', borderRadius: '8px' }}
            />
            <Typography variant="h5" component="h2">
              Building Solid Foundations and Fostering Relationships
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: '#e0f7fa',
              padding: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={cultureImg}
              alt="Our Culture"
              sx={{ marginBottom: '20px', borderRadius: '8px' }}
            />
            <Typography variant="h5" component="h2">
              Our Culture
            </Typography>
            <Typography variant="body1" sx={{ padding: '20px', textAlign: 'justify' }}>
              Our culture is built on a foundation of integrity, respect, and collaboration. We believe in fostering a positive and inclusive work environment where every team member is valued and empowered to contribute to our collective success. Our commitment to excellence drives us to continuously improve and innovate, ensuring that we deliver the highest quality results for our clients and communities.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;