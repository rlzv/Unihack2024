import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', color: 'text.primary', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}> {/* Increased spacing between Grid items */}
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
          <Grid item xs={12} sm={4}>
  <Box component="img" src="../img/logo_transparent.png" alt="Logo" sx={{ width: '100%', maxWidth: 150, height: 'auto' }} />
</Grid>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Useful Links
            </Typography>
            {['About', 'Features', 'Our Works', 'Career'].map((text, index) => (
              <Link 
                key={index} 
                href="#" 
                color="inherit" 
                display="block" 
                variant="body2" 
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }}>
                {text}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              georgia.young@example.com
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              +1 (703) 134-55-26
            </Typography>
          </Grid>

          {/* Newsletter Subscription */}
{/* Newsletter Subscription */}
<Grid item xs={12} sm={3}>
  <Typography variant="h6" color="text.primary" gutterBottom>
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
        <Box mt={4} display="flex" justifyContent="center" gap={3}> {/* Increased gap between social icons */}
          <IconButton href="#" color="inherit" aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="linkedin">
            <LinkedIn />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="instagram">
            <Instagram />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="facebook">
            <Facebook />
          </IconButton>
          <IconButton href="#" color="inherit" aria-label="youtube">
            <YouTube />
          </IconButton>
        </Box>

        {/* Footer Note */}
        <Typography variant="body2" color="text.secondary" align="center" mt={6}> {/* Increased top margin */}
          © 2024 Copyright: 
          <Link color="inherit" href="https://mui.com/" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }}>
            YourCompany.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
