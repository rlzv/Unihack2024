import React from 'react';
import App from './App';
import Questions from './routes/TripPlanner';
import NavBar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const FormularIntrebari: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Box flex="1">
                <App />
                <Questions isAuthenticated={false}/>
            </Box>
            <Footer />
        </Box>
    );
};

export default FormularIntrebari;
