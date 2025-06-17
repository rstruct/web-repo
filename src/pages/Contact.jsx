import React from "react";
import { Container, Typography, TextField, Button, Box, Paper, Divider } from "@mui/material";
import mapImage from "../assets/logo2.png";
import TitleSection from "../components/TitleSection";

const Contact = () => {
  return (
    <>
      <TitleSection title="Contact Us" />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url(${mapImage})`,
          backgroundSize: 'inherit',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.92)',
              boxShadow: 6,
              backdropFilter: 'blur(2px)',
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              We would love to hear from you! Please fill out the form below to get in touch with us.
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                required
                fullWidth
                id="subject"
                label="Subject"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Contact;