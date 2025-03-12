import React from 'react';
import { Box, Typography } from '@mui/material';
import coverImage from '../assets/img3.jpg'; // Replace with the path to your cover image

const AboutHeader = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px', // Full viewport height
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flext-start',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h2" sx={{ color: 'white',fontFamily: 'fantasy', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)',  borderLeft: '15px solid orange', margin: '150px 0px 0px 20px' }}>
        About Us
      </Typography>
    </Box>
  );
};

export default AboutHeader;