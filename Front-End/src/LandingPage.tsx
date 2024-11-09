import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Appbar from './Navbar';
import TourismCardsSection from './CardSelection';
import Footer from './Footer';
import Testimonials from './TestimonialsSelection';

const HeroSection = styled(Box)(({ theme }) => ({
    backgroundImage: 'url("../img/Piața_Victoriei_Timișoara.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#fff',
    textAlign: 'center',
    padding: theme.spacing(0),
}));

const SvgDivider = styled('div')({
    position: 'absolute',
    top: 0,
    width: '100%',
    lineHeight: 0,
    zIndex: 1,
});

function LandingPage() {
    const navigate = useNavigate();

    const handleCreateTripClick = () => {
        navigate('/create-tour');
    };

    return (
        <Box sx={{ margin: 0, padding: 0, position: 'relative' }}>
            <Appbar />
            <SvgDivider>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" preserveAspectRatio="none">
                    <path
                        fill="#ffffff"
                        fillOpacity="0.2"
                        d="M0,32L34.3,43.7C68.6,53,137,75,206,112C274.3,149,343,203,411,202.7C480,203,549,149,617,122.7C685.7,96,754,96,823,106.7C891.4,117,960,139,1029,160C1097.1,181,1166,203,1234,197.3C1302.9,192,1371,160,1406,144L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                    ></path>
                </svg>
            </SvgDivider>

            <HeroSection>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    Let’s Enjoy Your Life, Explore the World
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#0070bb',
                        color: 'white',
                        mb: 4,
                        fontSize: '16px',
                        '&:hover': {
                            backgroundColor: '#005faf',
                        },
                    }}
                    onClick={handleCreateTripClick} // Navigate to /create-tour on click
                >
                    Create your own trip
                </Button>
            </HeroSection>
            <TourismCardsSection />
            <Container sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    What Our Visitors Say
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    "Timișoara is a hidden gem in Romania! The historic sites and friendly locals made my trip unforgettable."
                </Typography>
                <Testimonials />
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    "Beautiful city with so much to offer. From the stunning river views to the rich culture, I loved every moment!"
                </Typography>
            </Container>
            <Footer />
        </Box>
    );
}

export default LandingPage;
