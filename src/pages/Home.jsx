import React from 'react';
import { Button, Box, Typography, CardMedia } from '@mui/material';
import homepageimg from '../assets/homepageimg1.png';
import rLogo from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import ProjectsCard from '../components/ProjectCard';
import TwoStoryBuildingImg from '../assets/TwoStoryBuildingImg.png';
import SolarPowerImg from '../assets/project5.jpeg';
import PoultryImg from '../assets/PoultryImg.jpeg';
import PartnerSection from '../components/PartnerSection';

function Home() {
  const navigate = useNavigate();
  const cardData = [
    {
      imageUrl: TwoStoryBuildingImg,
      title: 'Two-Story Commercial Building',
      description: 'Developed the structural design and analysis for a two-story commercial building with a total floor area of 1,600 sqm in Poblacion, Capas, Tarlac, ensuring stability, efficiency, and compliance with industry standards.',
      buttonText: 'View Projects'
    },
    {
      imageUrl: SolarPowerImg,
      title: '75MWac Pinugay Solar Power Plant',
      description: 'Conducted Structural Design verification and Analysis for the 75MWac Pinugay Solar Power Plant, including bored pile calculations with certification, as well as design computation and sign-off for the gantry crane and foundation, ensuring compliance with industry standards.​',
      buttonText: 'View Projects'
    },
    {
      imageUrl: PoultryImg,
      title: 'Multi-tier Poultry Building',
      description: 'We design, build, and fabricate the Multi-tier Poultry Building in La Union, ensuring precision, durability, and adherence to industry standards.​',
      buttonText: 'View Projects'
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          backgroundImage: `url(${homepageimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(255, 255, 255, 0.5)', // adjust opacity here
            zIndex: 0,
          }}></Box>


        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: 1,
            ml: { xs: 2, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: { xs: '2rem', sm: '4rem', lg: '5rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Designing Dreams
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: { xs: '2rem', sm: '4rem', lg: '5rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Constructing Realities
          </Typography>
          <Button
            onClick={() => navigate('/services')}
            sx={{
              mt: 2,
              backgroundColor: 'secondary.dark',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'secondary.main',
              },
            }}
          >
            View Services
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg,rgb(151, 159, 170) 0%,rgb(221, 221, 221) 100%)',
          color: '#222',
          p: { xs: 3, md: 6 },
          paddingLeft: { xs: 2, md: 15 },
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          maxWidth: { xs: '100%', md: '100%' },
          mx: 'auto',
          backdropFilter: 'blur(2px)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxWidth: { xs: '100%', md: '100%' },
            paddingRight: { xs: 0, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              mb: 1,
              mt: 5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            About RStruct
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              lineHeight: 1.8,
              color: '#333',
              fontFamily: 'Roboto, sans-serif',
              maxWidth: '800px',
              opacity: 0.95,
              letterSpacing: '0.01em',
            }}
          >
            RStruct Engineering Consultants offers comprehensive engineering design, project management, and construction services for residential, commercial, and industrial buildings.<br />
            We utilize the latest advancements in engineering software and construction materials to ensure high-quality and efficient project execution.
          </Typography>
          <Button
            sx={{
              mt: 2,
              backgroundColor: 'secondary.dark',
              color: 'white',
              '&:hover': {
                backgroundColor: 'secondary.main',
              },
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            Learn More
          </Button>
        </Box>
        <CardMedia
          component="img"
          image={rLogo}
          sx={{
            opacity: 0.3,
            width: { xs: '200px', md: '400px' },
            height: 'auto',
            marginTop: { xs: 2, md: 0 },
            alignSelf: { xs: 'flex-start', md: 'flex-start' },
            objectFit: 'contain',
            mr: 30
          }}
        />
      </Box>
      {/* projects */}
      <Box sx={{}}>
        <Typography variant="h3" sx={{ m: 2, color:"primary.main" }}>
          Our Projects
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          color: '#222',
          p: 4,

        }}>

        {cardData.map((card, index) => (
          <ProjectsCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            sx={{
              width: { xs: '100%', sm: '48%', md: '100%' },
              margin: { xs: 1, sm: 1.5, md: 2.5 },
              boxShadow: 3,
              borderRadius: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onButtonClick={() => navigate('/projects')}
          />
        ))}
      </Box>
      {/* partner section */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        color: '#222',
        p: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
      }}>
        <PartnerSection />
      </Box>

    </>
  );
}

export default Home;