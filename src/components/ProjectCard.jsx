import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: 370,                // Fixed width for all cards
  minWidth: 320,             // Prevent shrinking below this width
  maxWidth: 450,             // Prevent growing above this width
  minHeight: 420,
  height: 550,               // Fixed height for all cards
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '& .MuiCardMedia-root': {
      transform: 'scale(1.03)',
      filter: 'grayscale(50%) contrast(110%)'
    },
    '& .gradient-overlay': {
      opacity: 0.95,
      height: '100%'
    },
    '& .MuiTypography-h5': {
      color: theme.palette.common.white,
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    },
    '& .MuiTypography-body2': {
      color: 'rgba(255, 255, 255, 0.9)'
    },
    '& .action-button': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      boxShadow: theme.shadows[4]
    }
  }
}));

const GradientOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 0,
  background: `linear-gradient(to top, ${theme.palette.primary.main} 0%, rgba(0,0,0,0) 100%)`,
  zIndex: 1,
  opacity: 0,
  transition: theme.transitions.create(['height', 'opacity'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  borderRadius: theme.shape.borderRadius * 2
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 350,
  transition: theme.transitions.create(['transform', 'filter'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  filter: 'grayscale(20%)'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(1, 3),
  boxShadow: theme.shadows[2],
  transition: theme.transitions.create(['background-color', 'color', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&::after': {
    content: '"→"',
    display: 'inline-block',
    marginLeft: theme.spacing(0.5),
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    }),
    opacity: 0.8
  },
  '&:hover::after': {
    transform: 'translateX(4px)',
    opacity: 1
  }
}));

const ProjectsCard = ({ imageUrl, title, description, buttonText = 'Learn more', sx, hideButton, onButtonClick }) => {
  return (
    <StyledCard sx={sx}>
      <GradientOverlay className="gradient-overlay" />
      <StyledCardMedia
        component="img"
        image={imageUrl}
        alt={title}
        loading="lazy"
      />
      <CardContent sx={{ position: 'relative', zIndex: 2, height: 'calc(100% - 220px)' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        {!hideButton && buttonText && (
          <StyledButton
            variant="contained"
            className="action-button"
            sx={{ bgcolor: 'secondary.main', color: 'common.white' }}
            onClick={onButtonClick}
          >
            {buttonText}
          </StyledButton>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default ProjectsCard;