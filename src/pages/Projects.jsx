import React, { useState } from 'react';
import { Container, Grid2, Button, Typography, Modal, Box, CardMedia, Fade } from '@mui/material';
import img1 from '../assets/project1.png';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
import img4 from '../assets/project4.png';
import img5 from '../assets/project5.jpeg';
import img6 from '../assets/PoultryImg.jpeg';
import img7 from '../assets/project7.jpeg';
import img8 from '../assets/project8.jpeg';
import img9 from '../assets/project9.jpeg';
import TitleSection from '../components/TitleSection';
import ProjectsCard from '../components/ProjectCard';
import { Title } from '@mui/icons-material';

const servicesData = [
  {
    id: 1,
    category: 'STRUCTURAL DESIGN AND ANALYSIS',
    title: 'Three - Storey Commercial Building​',
    description: 'Three-Story Commercial Building Design & Structural Analysis – 3,000 SQM Development in Cavite City',
    image: img1,
    details: 'Developed a comprehensive design and structural analysis for a three-story commercial building with a total floor area of 3,000 sqm in Brgy. Carida, Cavite City, for Long Star Realty Development Corp. The project integrates structural integrity, functionality, and compliance with industry standards, ensuring a safe and efficient built environment.​'
  },
  {
    id: 2,
    category: 'STRUCTURAL DESIGN AND ANALYSIS',
    title: 'Two - Storey Commercial Building​',
    description: 'Two-Story Commercial Building Design & Structural Analysis – 1,600 SQM Development in Capas, Tarlac',
    image: img2,
    details: 'Developed the structural design and analysis for a two-story commercial building with a total floor area of 1,600 sqm in Poblacion, Capas, Tarlac, ensuring stability, efficiency, and compliance with industry standards.​'
  },
  {
    id: 3,
    category: 'STRUCTURAL DESIGN AND ANALYSIS',
    title: 'Five - Storey Mixed Used Building with Basement​',
    description: 'Five-Storey Mixed-Use Building with Basement – 172 SQM/Floor Structural Design & Analysis in Kiangan, Ifugao',
    image: img3,
    details: 'Developed the Structural Design and Analysis for a Five-Storey mixed-use building with a basement, covering 172 sqm per floor, in Poblacion, Kiangan, Ifugao, for Kiangan Community and Multi-Development Cooperative. The project ensures stability, efficiency, and compliance with industry standards.​​'
  },
  {
    id: 4,
    category: 'STRUCTURAL DESIGN AND ANALYSIS',
    title: 'Four - Storey School Building​',
    description: 'Four-Storey School Building Structural Design & Analysis – Angeles, Pampanga',
    image: img4,
    details: 'Developed the Structural Design and Analysis for a Four-Storey School Building in Angeles, Pampanga, ensuring structural integrity, safety, and compliance with educational facility standards.​​'
  },
  {
    id: 5,
    category: 'STRUCTURAL DESIGN AND ANALYSIS',
    title: '75MWac Pinugay Solar Power Plant​',
    description: '75MWac Pinugay Solar Power Plant: Structural Design Verification & Bored Pile Analysis',
    image: img5,
    details: 'Conducted Structural Design verification and Analysis for the 75MWac Pinugay Solar Power Plant, including bored pile calculations with certification, as well as design computation and sign-off for the gantry crane and foundation, ensuring compliance with industry standards.'
  },
  {
    id: 6,
    category: 'PROJECT MANAGEMENT AND CONSTRUCTION SERVICES',
    title: 'Multi-tier Poultry Building​',
    description: 'Multi-Tier Poultry Building Design & Construction - La Union',
    image: img6,
    details: 'We design, build, and fabricate the Multi-tier Poultry aBuilding in La Union, ensuring precision, durability, and adherence to industry standards.​​​​'
  },
  {
    id: 7,
    category: 'PROJECT MANAGEMENT AND CONSTRUCTION SERVICES',
    title: 'Elevated Poultry Building​',
    description: 'Elevated Poultry Building Design-Build Project – Ilocos Sur',
    image: img7,
    details: 'We Designed, Built, and Fabricated the Elevated Poultry Building in Ilocos Sur, ensuring precision, durability, and full compliance with industry standards. The structure is engineered for operational efficiency and sustainability, supporting optimal poultry production.'
  },
  {
    id: 8,
    category: 'PROJECT MANAGEMENT AND CONSTRUCTION SERVICES',
    title: 'Multi-tier Poultry Building​',
    description: 'Multi-Tier Poultry Building Design-Build Project – Urbiztondo, Pangasinan',
    image: img8,
    details: 'We Designed, Built, and Fabricated the Multi-tier Poultry Building in Urbiztondo, Pangasinan, ensuring precision, durability, and full compliance with industry standards. The structure is engineered for operational efficiency and sustainability, supporting optimal poultry production.'
  },
  {
    id: 9,
    category: 'PROJECT MANAGEMENT AND CONSTRUCTION SERVICES',
    title: 'Multi-tier Poultry Building​',
    description: 'Multi-Tier Poultry Farm Design-Build Project – Nueva Ecija',
    image: img9,
    details: 'We Designed, Built, and Fabricated the Multi-tier Poultry Building in Nueva Ecija, ensuring precision, durability, and full compliance with industry standards. The structure is engineered for operational efficiency and sustainability, supporting optimal poultry production.'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const filteredServices = filter === 'All' ? servicesData : servicesData.filter(service => service.category === filter);

  return (
    <>
      <TitleSection title="Projects" />
      <Container maxWidth={false} sx={{ marginTop: '100px', width: '100%', maxWidth: '1600px' }}>
        <Typography variant="h3" gutterBottom color="text.primary">Our Projects</Typography>
        <Box display="flex" gap={2} mb={3}>
          <Button variant="contained" onClick={() => handleFilterChange('All')}>All</Button>
          <Button variant="contained" onClick={() => handleFilterChange('STRUCTURAL DESIGN AND ANALYSIS')}>STRUCTURAL DESIGN AND ANALYSIS</Button>
          <Button variant="contained" onClick={() => handleFilterChange('PROJECT MANAGEMENT AND CONSTRUCTION SERVICES')}>PROJECT MANAGEMENT AND CONSTRUCTION SERVICES</Button>

        </Box>
        <Grid2 container spacing={4} marginTop={2} justifyContent="center">
          {filteredServices.map(service => (
            <Grid2 item key={service.id} >
              <Fade in={true} timeout={500}>
                <Box onClick={() => handleCardClick(service)} sx={{ cursor: 'pointer' }}>
                  <ProjectsCard
                    imageUrl={service.image}
                    title={service.title}
                    description={service.description}
                    // Remove buttonText prop to hide the button in ProjectCard
                    sx={{
                      width: '100%',
                      minHeight: 320,
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    // Optionally, you can add a prop to ProjectCard to hide the button if needed
                    hideButton
                  />
                </Box>
              </Fade>
            </Grid2>
          ))}
        </Grid2>
        <Modal open={modalOpen} onClose={handleClose}>
          <Box sx={{
            p: 2,
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            maxWidth: '650px',
            width: '90%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the modal
            boxShadow: 24,
          }}>
            {selectedService && (
              <>
                <Typography variant="h6">{selectedService.title}</Typography>
                <Typography variant="body1" color='secondary.main'>{selectedService.details}</Typography>
                <CardMedia
                  component="img"
                  image={selectedService.image}
                  alt={selectedService.title}
                  sx={{ mt: 2 }}
                />
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Projects;
