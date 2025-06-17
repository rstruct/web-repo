import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import About from '../pages/About';

const AboutSection = () => {
  const theme = useTheme();

  const MissionCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    boxShadow: theme.shadows[2],
    height: '100%',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[6],
    },
  }));

  return (
    <Box sx={{
      py: 10,
      px: 2,
      backgroundColor: theme.palette.grey[50],
      position: 'relative',
    }}>
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }} />
      
      <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
        <Typography variant="h3" component="h2" sx={{
          mb: 6,
          textAlign: 'center',
          fontWeight: 700,
          color: theme.palette.text.primary,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: 80,
            height: 4,
            background: theme.palette.primary.main,
            margin: `${theme.spacing(2)} auto 0`,
            borderRadius: 2,
          }
        }}>
          Our Purpose
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MissionCard>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: theme.palette.primary.main
              }}>
                <Box component="span" sx={{
                  fontSize: 40,
                  mr: 2,
                  lineHeight: 1
                }}>
                  🎯
                </Box>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600 }}>
                  Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: theme.palette.text.secondary
              }}>
               To design and construct value-engineered structures that adhere to the highest code standards and specifications, ensuring safety, efficiency, and sustainability in every project.​
                Through innovation and precision, we deliver reliable and forward-thinking solutions that shape resilient communities.​ </Typography>
            </MissionCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MissionCard>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: theme.palette.secondary.main
              }}>
                <Box component="span" sx={{
                  fontSize: 40,
                  mr: 2,
                  lineHeight: 1
                }}>
                  🔭
                </Box>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 600 }}>
                  Vision
                </Typography>
              </Box>
              <Typography variant="body1" sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: theme.palette.text.secondary
              }}>
                 Is to lead in shaping a future where innovation, sustainability, and precision define every structure. ​
Utilizing the latest software and cutting-edge technology, we create value-engineered solutions that meet and exceed industry standards, setting new benchmarks for excellence. ​
Through responsible and visionary construction, we transform communities and foster lasting impact.
              </Typography>
            </MissionCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;