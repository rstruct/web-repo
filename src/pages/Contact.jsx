import React from "react";
import { Container, Typography, TextField, Button, Box, Grid2, Paper } from "@mui/material";
import mapImage from "../assets/logo2.png"; // Replace with the path to your map image
import ContactHeader from "../components/ContactHeader";
const Contact = () => {
  return (
    <>
      <ContactHeader/>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={6}>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                margin="normal"
                variant="outlined"
                type="email"
              />
              <TextField
                required
                fullWidth
                id="subject"
                label="Subject"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </Box>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <Box
              component="img"
              src={mapImage}
              alt="Map"
              sx={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" component="h2">
                Our Office
              </Typography>
              <Typography variant="body1">
                123 Main Street, Suite 100<br />
                Anytown, USA 12345
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Phone:</strong> (123) 456-7890
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> info@example.com
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
 
    </>     );
};

export default Contact;