import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import coverImage from '../assets/bg1.png';
import theme from '../styles/theme'; 
// Define the animation
const openclose = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 270px;
  }
`;

const TitleSection = ({ title }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          margin: '150px 0 0 20px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: 'white',
            fontFamily: 'Tahoma',
            padding: '20px',
            backgroundColor: 'rgba(12, 10, 10, 0.5)',
            borderLeft: `15px solid ${theme.palette.secondary.main}`,
            overflow: 'hidden',
            width: animate ? '270px' : 0,
            animation: animate ? `${openclose} 3s forwards` : 'none',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default TitleSection;