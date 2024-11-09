import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const pages = ['Home', 'My Tours', 'Visit Timisoara', 'Tours', 'Contact us'];

function ResponsiveAppBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        mt: '0px',
        transition: 'background-color 0.5s ease, padding 0.3s ease',  // Smooth transition for background color and padding
        backgroundColor: scrolled ? '#005faf' : 'transparent', // Change background color based on scroll
        padding: scrolled ? '2px' : '2px',  // Increase padding on scroll
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, backgroundColor: scrolled ? 'white' : 'transparent', borderRadius: scrolled ? '5px' : 'none', padding: '2px' }}>
            <Button href="#" sx={{ padding: 0 }}>
              <img src="../img/logo_transparent.png" alt="Logo" style={{ height: 40, marginRight: 8 }} />
            </Button>
          </Box>
          {/* Centered Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                href="#"
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  border: 'none', 
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' :'#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Right Button (Sign up) */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              href="#Sign up"
              sx={{
                color: scrolled ? '#0070bb' :'white',
                backgroundColor: scrolled ? 'white' :'#0070bb',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '12px',
                fontSize: '16px',
                px: 2,
                '&:hover': { 
                  backgroundColor: scrolled ? '#0070bb':'#005faf',
                  color: 'white',
                  borderColor: '#005faf',
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
