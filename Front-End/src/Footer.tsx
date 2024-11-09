import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', color: 'text.primary', py: 6 }}>
<svg
  id="wave"
  style={{
    transition: '0.3s',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    zIndex: '1'
  }}
  viewBox="0 0 1440 330"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
      <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
      <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
    </linearGradient>
  </defs>
  <path
    style={{ transform: 'translate(0, 0px)', opacity: 0.2 }}
    fill="url(#sw-gradient-0)"
    d="M0,0L60,38.5C120,77,240,154,360,154C480,154,600,77,720,71.5C840,66,960,132,1080,159.5C1200,187,1320,176,1440,192.5C1560,209,1680,253,1800,269.5C1920,286,2040,275,2160,275C2280,275,2400,286,2520,286C2640,286,2760,275,2880,231C3000,187,3120,110,3240,93.5C3360,77,3480,121,3600,121C3720,121,3840,77,3960,49.5C4080,22,4200,11,4320,22C4440,33,4560,66,4680,71.5C4800,77,4920,55,5040,88C5160,121,5280,209,5400,225.5C5520,242,5640,187,5760,181.5C5880,176,6000,220,6120,225.5C6240,231,6360,198,6480,198C6600,198,6720,231,6840,236.5C6960,242,7080,220,7200,176C7320,132,7440,66,7560,55C7680,44,7800,88,7920,115.5C8040,143,8160,154,8280,165C8400,176,8520,187,8580,192.5L8640,198L8640,330L8580,330C8520,330,8400,330,8280,330C8160,330,8040,330,7920,330C7800,330,7680,330,7560,330C7440,330,7320,330,7200,330C7080,330,6960,330,6840,330C6720,330,6600,330,6480,330C6360,330,6240,330,6120,330C6000,330,5880,330,5760,330C5640,330,5520,330,5400,330C5280,330,5160,330,5040,330C4920,330,4800,330,4680,330C4560,330,4440,330,4320,330C4200,330,4080,330,3960,330C3840,330,3720,330,3600,330C3480,330,3360,330,3240,330C3120,330,3000,330,2880,330C2760,330,2640,330,2520,330C2400,330,2280,330,2160,330C2040,330,1920,330,1800,330C1680,330,1560,330,1440,330C1320,330,1200,330,1080,330C960,330,840,330,720,330C600,330,480,330,360,330C240,330,120,330,60,330L0,330Z"
  />
</svg>



      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Logo and Description */}
          <Grid item xs={12} sm={4}>
            <Box component="img" src="../img/logo_transparent.png" alt="Logo" sx={{ width: '100%', maxWidth: 150, height: 'auto' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              We are offering unique and exciting tours to explore the city and its surroundings. Our mission is to provide personalized and memorable experiences for travelers. Join us on a journey to discover the best of this vibrant destination.
            </Typography>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ mb: 3, color: '#0070bb', cursor: 'pointer', borderBottom: '2px solid #0070bb', pb: 1 , '&:hover': { color: '#005faf' } }}>
              Useful Links
            </Typography>
            {['Home', 'My Tours', 'Visit Timisoara', 'Tours', 'Contact us'].map((text, index) => (
              <Link key={index} href="#" color="inherit" display="block" variant="body2" sx={{ textDecoration: 'none', mb: 1, link: 'none', color: '#00000099', '&:hover': { textDecoration: 'none', color: 'primary.main' } }}>
                {text}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ mb: 3, color: '#0070bb', cursor: 'pointer', '&:hover': { color: '#005faf' }, borderBottom: '2px solid #0070bb', pb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              Str: Strada Alba Iulia nr.2 Timisoara
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              Email :infocentru@e-uvt.ro
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              Phone: +071234567
            </Typography>
          </Grid>

          {/* Newsletter Subscription */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{ mb: 3, color: '#0070bb', cursor: 'pointer', borderBottom: '2px solid #0070bb', pb: 1 , '&:hover': { color: '#005faf' } }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Stay updated with the latest news and offers.
            </Typography>
            <TextField
              label="Email address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                mb: 2,
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                  borderRadius: 2,
                  padding: '0 10px',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: '10px 0',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box mt={5} display="flex" justifyContent="center" gap={4}>
          <IconButton href="#" color="inherit" aria-label="twitter" sx={{ color: 'white', backgroundColor: '#0070bb', '&:hover': { backgroundColor: '#005faf' } }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="linkedin" sx={{ color: 'white', backgroundColor: '#0070bb', '&:hover': { backgroundColor: '#005faf' } }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="instagram" sx={{ color: 'white', backgroundColor: '#0070bb', '&:hover': { backgroundColor: '#005faf' } }}>
            <Instagram />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="facebook" sx={{ color: 'white', backgroundColor: '#0070bb', '&:hover': { backgroundColor: '#005faf' } }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="youtube" sx={{ color: 'white', backgroundColor: '#0070bb', '&:hover': { backgroundColor: '#005faf' } }}>
            <YouTube />
          </IconButton>
        </Box>

        {/* Footer Note */}
        <Typography variant="body2" color="text.secondary" align="center" mt={6}>
          © 2024 Copyright:
          <Link color="inherit" href="https://mui.com/" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }}>
            VisitTM
          </Link>
        </Typography>
      </Container>


    </Box>
  );
};

export default Footer;
