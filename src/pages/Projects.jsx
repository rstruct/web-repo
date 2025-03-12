import React, { useState } from 'react';
import { Container, Grid2, Button, Card, CardContent, Typography, Modal, Box, CardMedia, Fade } from '@mui/material';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import ProjectHeader from '../components/ProjectsHeader';

const servicesData = [
  { id: 1, category: 'Construction', title: 'Building Construction', description: 'We provide top-notch construction services.', image: img1, details: 'Detailed information about Building Construction.' },
  { id: 2, category: 'Repairs', title: 'Home Repairs', description: 'Expert repair services for your home.', image: img2, details: 'Detailed information about Home Repairs.' },
  { id: 3, category: 'Design', title: 'Interior Design', description: 'Beautiful and functional interior design solutions.', image: img3, details: 'Detailed information about Interior Design.' },
  { id: 4, category: 'Construction', title: 'Commercial Construction', description: 'Professional construction services for businesses.', image: img4, details: 'Detailed information about Commercial Construction.' },
  { id: 5, category: 'Repairs', title: 'Plumbing Repairs', description: 'Reliable plumbing repair services.', image: img5, details: 'Detailed information about Plumbing Repairs.' },
  { id: 6, category: 'Design', title: 'Landscape Design', description: 'Creative landscape design for your outdoor spaces.', image: img6, details: 'Detailed information about Landscape Design.' },
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
      <ProjectHeader/>
    <Container sx={{ marginTop: '100px'}}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <Box display="flex" gap={2} mb={3}>
        <Button variant="contained" onClick={() => handleFilterChange('All')}>All</Button>
        <Button variant="contained" onClick={() => handleFilterChange('Construction')}>Construction</Button>
        <Button variant="contained" onClick={() => handleFilterChange('Repairs')}>Repairs</Button>
        <Button variant="contained" onClick={() => handleFilterChange('Design')}>Design</Button>
      </Box>
      <Grid2 container spacing={4} marginTop={2}>
        {filteredServices.map(service => (
          <Grid2 item key={service.id} xs={12} sm={6} md={4}>
            <Fade in={true} timeout={500}>
              <Card onClick={() => handleCardClick(service)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid2>
        ))}
      </Grid2>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={{ p: 2, backgroundColor: 'black', borderRadius: '8px', maxWidth: '500px', margin: 'auto' }}>
          {selectedService && (
            <>
              <Typography variant="h6">{selectedService.title}</Typography>
              <Typography variant="body1">{selectedService.details}</Typography>
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
