import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        mt: '0px',
        transition: 'background-color 0.5s ease, padding 0.3s ease',
        backgroundColor: scrolled ? '#005faf' : 'transparent',
        padding: '2px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2,
              backgroundColor: scrolled ? 'white' : 'transparent',
              borderRadius: scrolled ? '5px' : 'none',
              padding: '2px',
            }}
          >
            <Button href="/" sx={{ padding: 0 }}>
              <img src="../img/logo_transparent.png" alt="Logo" style={{ height: 40, marginRight: 8 }} />
            </Button>
          </Box>

          {/* Centered Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {/* Home Button */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' : '#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                Home
              </Button>
            </Link>
            
            {/* My Tours Button */}
            <Link to="/my-tours" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' : '#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                My Tours
              </Button>
            </Link>

            {/* Visit Timisoara Button */}
            <Link to="/visit-timisoara" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' : '#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                Visit Timisoara
              </Button>
            </Link>

            {/* Tours Button */}
            <Link to="/tours" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' : '#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                Tours
              </Button>
            </Link>

            {/* Contact us Button */}
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: 'white',
                  mx: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  transition: 'border 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? '#0070bb' : '#005faf',
                    color: 'white',
                    borderColor: '#005faf',
                  },
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>

          {/* Right Button (Sign up) */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              href="/SignUp"
              sx={{
                color: scrolled ? '#0070bb' : 'white',
                backgroundColor: scrolled ? 'white' : '#0070bb',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '12px',
                fontSize: '16px',
                px: 2,
                '&:hover': {
                  backgroundColor: scrolled ? '#0070bb' : '#005faf',
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
};

export default NavBar;
