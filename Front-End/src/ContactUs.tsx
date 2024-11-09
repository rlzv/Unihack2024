import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import NavBar from './Navbar';
import Footer from './Footer';

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <NavBar />
      <svg
                id="wave"
                style={{ transition: '0.3s', position: 'absolute', bottom: '0', left: '0', width: '100%', zIndex: 0 }}
                viewBox=" 0 0 480 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
style={{  opacity: 0.2}}

                    fill="url(#sw-gradient-0)"
d="M0,160L40,170.7C80,181,160,203,240,181.3C320,160,400,96,480,101.3C560,107,640,181,720,192C800,203,880,149,960,154.7C1040,160,1120,224,1200,250.7C1280,277,1360,267,1400,261.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                />
            </svg>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f3f3f3', // Adjust background color if needed
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            {/* Left Section - Contact Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="#005faf">
                Contact Us
              </Typography>
              <Typography gutterBottom sx={{ fontSize: '40px', paddingBottom: '1vh' }}>
             Get In Touch With Us
            </Typography>
              <Typography variant="body1" paragraph>
              "Looking for your next adventure? We're here to turn your dream vacation into reality! Get in touch with us, and we'll help you plan an unforgettable journey."
"Feel free to reach out with any questions – we're happy to assist!"

This version focuses on the excitement of travel while offering a friendly invitation for assistance.
              </Typography>
              
              <Box display="flex" alignItems="center" mb={2}>
                <LocationOnIcon sx={{ color: '#005faf', mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1">Our Location</Typography>
                  <Typography variant="body2">Strada Alba Iulia nr.2 Timisoara</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ color: '#005faf', mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1">Phone Number</Typography>
                  <Typography variant="body2">Phone: +071234567</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" paddingBottom={20}>
                <EmailIcon sx={{ color: '#005faf', mr: 2}} />
                <Box>
                  <Typography variant="subtitle1">Email Address</Typography>
                  <Typography variant="body2">infocentru@e-uvt.ro</Typography>
                </Box>
              </Box >
            </Grid>

            {/* Right Section - Form */}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: '#005faf', // Adjusted for purple background
                  boxShadow: 3,
                  color: '#fff',
                }}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Your Phone"
                  name="phone"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  label="Your Message"
                  name="message"
                  variant="filled"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff6f61', // Button color (similar to pink in example)
                    color: '#fff',
                    '&:hover': { backgroundColor: '#e85b50', zIndex: 1 },
                  }}
                  fullWidth
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUsForm;
