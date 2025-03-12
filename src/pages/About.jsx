import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography, Paper, StepContent, Button, CardMedia } from '@mui/material';
import foundedImg from '../assets/img2.jpg';
import milestoneImg from '../assets/img3.jpg';
import expansionImg from '../assets/img4.jpg';
import acquisitionImg from '../assets/img5.jpg';
import AboutHeader from '../components/AboutHeader';

const steps = [
  { label: 'Founded', description: 'Company was founded in 2000.', image: foundedImg },
  { label: 'First Milestone', description: 'Reached 1 million users in 2005.', image: milestoneImg },
  { label: 'Expansion', description: 'Expanded to international markets in 2010.', image: expansionImg },
  { label: 'Acquisition', description: 'Acquired by a larger company in 2020.', image: acquisitionImg },
];

const About = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <AboutHeader/>
  
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <CardMedia
                  component="img"
                  height="200"
                  image={step.image}
                  alt={step.label}
                  sx={{ marginBottom: '10px' }}
                />
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  {step.description}
                </Typography>
                <Box sx={{ marginTop: '10px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    sx={{ marginRight: '10px' }}
                    disabled={index === steps.length - 1}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleBack}
                    disabled={index === 0}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              All steps completed - you&apos;re finished
            </Typography>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default About;