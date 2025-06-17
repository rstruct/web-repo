import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.jpeg';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.jpeg';
import partner8 from '../assets/partner8.png';

const PartnerSection = () => {
  const logos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8
  ];

  // Duplicate the logos array to create a seamless loop
  const doubleLogos = [...logos, ...logos];

  // Define keyframes animation
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  `;

  return (
    <Box sx={{
      width: '100%',
      overflow: 'hidden',
      py: 8,
      backgroundColor: 'grey.100',
      textAlign: 'center',
      position: 'relative',
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 100,
        zIndex: 2,
      },
      '&:before': {
        left: 0,
        background: 'linear-gradient(to right, #f8f8f8, transparent)',
      },
      '&:after': {
        right: 0,
        background: 'linear-gradient(to left, #f8f8f8, transparent)',
      }
    }}>
      <Box sx={{ maxWidth: 'md', mx: 'auto', px: 3 }}>
        <Typography variant="h4" sx={{ 
          mb: 2, 
          color: 'primary.main',
          fontWeight: 600,
          letterSpacing: 1.1
        }}>
          Our Partners
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: 3, 
          color: 'grey.700',
          lineHeight: 1.6
        }}>
          We collaborate, combining expertise to deliver innovative, high-quality solutions.
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: 4, 
          color: 'grey.700',
          lineHeight: 1.6
        }}>
          Together, we set new industry standards and create meaningful impact.
        </Typography>
      </Box>

      <Box sx={{ 
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        mx: 'auto',
        maxWidth: 'lg'
      }}>
        <Box sx={{
          display: 'flex',
          animation: `${scroll} 25s linear infinite`,
          width: `calc(250px * ${doubleLogos.length})`,
          '&:hover': {
            animationPlayState: 'paused'
          },
          '@media (max-width: 900px)': {
            animationDuration: '20s',
          },
        }}>
          {doubleLogos.map((logo, index) => (
            <Box key={index} sx={{
              flex: '0 0 250px',
              px: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              '@media (max-width: 900px)': {
                flex: '0 0 180px'
              }
            }}>
              <Box
                component="img"
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: 80,
                  width: 'auto',
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: 'scale(1)',
                  cursor: 'pointer',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.15)',
                    boxShadow: 3,
                    zIndex: 3,
                    position: 'relative'
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerSection;