import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, useTheme, useMediaQuery } from '@mui/material';
import TitleSection from '../components/TitleSection';
import ServicesImg1 from '../assets/ServicesImg1.png';
import ServicesImg2 from '../assets/services-2.jpeg';
import ServicesImg3 from '../assets/ServicesImg3.jpeg';

const services = [
  {
    label: 'Structural Analysis and Design',
    description: 'We ensure safe, durable buildings by evaluating forces, materials, and construction methods for residential, commercial, and industrial projects.',
    image: ServicesImg1,
  },
  {
    label: 'Comprehensive Design Services',
    description: 'Complete solutions including architectural, plumbing, electrical, and mechanical plans, plus all essential documentation for seamless execution.',
    image: ServicesImg2,
  },
  {
    label: 'Project Management & Construction',
    description: 'Strategic planning, precise execution, and adherence to standards for high-quality, timely project completion.',
    image: ServicesImg3,
  },
];

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <TitleSection title="Services" />
      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: 6,
          marginTop: '60px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
         
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: theme.palette.primary.main,
            textAlign: 'center',
            letterSpacing: 1.2,
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 6,
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: 12,
                  },
                  background: 'white',
                }}
              >
                <CardMedia
                  component="img"
                  height={isMobile ? 160 : 200}
                  image={service.image}
                  alt={service.label}
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(0.92) contrast(1.08)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      color: theme.palette.primary.dark,
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {service.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      fontFamily: 'Roboto, sans-serif',
                      opacity: 0.95,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Services;