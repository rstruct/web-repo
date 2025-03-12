import React from 'react';
import { Box, Typography } from '@mui/material';
import FooterDetails from './FooterDetails';

const Footer = () => {
  return (
    <>
      <FooterDetails/>
    <Box sx={{ bgcolor: 'rgba(233, 144, 1, 0.76)', color: 'black', textAlign: 'center', py: 2 , left: 0, bottom: 0, width: '100%'}}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Construction Company. All rights reserved.
      </Typography>
      
      </Box>
      </>
  );
};

export default Footer;