import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Keyframe animations
const swapRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  25% {
    transform: translateX(-100%) translateY(-100%);
  }
  75% {
    transform: translateX(0) translateY(-100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

const swapLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  25% {
    transform: translateX(100%) translateY(100%);
  }
  75% {
    transform: translateX(0) translateY(100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

// Styled character component
const AnimatedChar = styled('span')(({ index }) => ({
  display: 'inline-block',
  animation: `${index % 2 === 0 ? swapRight : swapLeft} 0.5s forwards`,
  animationDelay: `${index * 0.1}s`,
  whiteSpace: 'pre',
}));

const IntroAnimation = ({ 
  lines = ["Designing Dreams", "Creating Realities"],
  lineSpacing = 2,
  charSpacing = '0.2em'
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      gap={lineSpacing}
    >
      {lines.map((line, lineIndex) => (
        <Typography
          key={lineIndex}
          variant="h2"
          component="div"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            textAlign: 'center',
            letterSpacing: charSpacing,
          }}
        >
          {line.split('').map((char, charIndex) => (
            <AnimatedChar 
              key={`${lineIndex}-${charIndex}`} 
              index={charIndex}
            >
              {char === ' ' ? '\u00A0' : char}
            </AnimatedChar>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default IntroAnimation;