import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Chip,
    Stack,
    Dialog,
    DialogContent,
    CircularProgress,
    TextField,
    Grid,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface TripBuilderProps {
    isAuthenticated: boolean;
}

const tripTypes = ['Solo Trip', 'Partner Trip', 'Friends Trip', 'Family Trip'];
const interestOptions = [
    'Must-see Attractions',
    'Great Food',
    'Hidden Gems',
    'Historical Landmarks',
    'Traditional Cuisine',
    'Museums & Art',
    'Unique Accommodation',
    'Outdoor Activities',
    'Shopping',
    'Coffee Culture',
    'Adventure & Sports',
    'Theatre & Arts',
];

const TripBuilder: React.FC<TripBuilderProps> = ({ isAuthenticated }) => {
    const [step, setStep] = useState(1);
    const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [tripType, setTripType] = useState<string | null>(null);
    const [interests, setInterests] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => setStep((prevStep) => Math.min(prevStep + 1, 3));
    const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

    const handleFinish = async () => {
        if (!tripType || interests.length === 0) {
            alert("Please select a trip type and interests.");
            return;
        }
        setLoading(true);
        // Finish action logic here
        setLoading(false);
    };

    const handleSaveTrip = async () => {
        if (!tripType || interests.length === 0) {
            alert("Complete trip details to save.");
            return;
        }
        setLoading(true);
        // Save action logic here
        setLoading(false);
    };

    const handleTripTypeChange = (event: React.MouseEvent<HTMLElement>, newTripType: string | null) => {
        if (newTripType) setTripType(newTripType);
    };

    const handleInterestToggle = (interest: string) => {
        setInterests((prevInterests) =>
            prevInterests.includes(interest) ? prevInterests.filter((item) => item !== interest) : [...prevInterests, interest]
        );
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3} padding={3} sx={{ bgcolor: 'white', borderRadius: 2 }}>
    <Typography
        variant="h5"
        gutterBottom
        color="#005faf"
        sx={{ paddingTop: '50px', fontSize: '3rem' }} // Adjust fontSize as needed
    >
        When are you going?
    </Typography>
    <Box display="flex" flexDirection="column" alignItems="center" mt={3} padding={3} marginTop={0} sx={{ bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>When are you going?</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" justifyContent="space-between" mt={3} padding={3} sx={{ bgcolor: 'white', borderRadius: 2 }}>
                {/* Arrival Date */}
                <Box flex={1} display="flex" flexDirection="column" alignItems="center" mr={25}>
                    <Typography variant="subtitle1" mb={1} sx={{ color: '#005faf', fontSize: '1.5rem' }}>
                        Arrival Date
                    </Typography>
                    <StaticDatePicker
                        orientation="portrait"
                        value={arrivalDate}
                        onChange={(newValue) => setArrivalDate(newValue)}
                        sx={{
                            width: '100%',
                            border: '2px solid black', // Adds black border
                            borderRadius: '8px', // Optional: Adds rounded corners to the border
                        }}
                    />
                </Box>
                {/* Departure Date */}
                <Box flex={1} display="flex" flexDirection="column" alignItems="center" ml={25}>
                    <Typography variant="subtitle1" mb={1} sx={{ color: '#005faf', fontSize: '1.5rem' }}>
                        Departure Date
                    </Typography>
                    <StaticDatePicker
                        orientation="portrait"
                        value={departureDate}  
                        onChange={(newValue) => setDepartureDate(newValue)}  
                        sx={{
                            width: '100%',
                            border: '2px solid black', // Adds black border
                            borderRadius: '8px', // Optional: Adds rounded corners to the border
                        }}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    </Box>
</Box>
                );
            case 2:
                return (
<Box display="flex" flexDirection="column" alignItems="center" height="87.38vh" mt={3} padding={3} sx={{ borderRadius: 2 }}>
    <Typography variant="h5" gutterBottom sx={{ color: '#005faf', fontSize: '3rem', paddingTop: '50px' }}>
        What kind of trip are you planning?
    </Typography>
    <ToggleButtonGroup
        value={tripType}
        exclusive
        onChange={handleTripTypeChange}
        aria-label="trip type"
        sx={{
            mt: 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            paddingTop: '100px',
            justifyContent: 'center', // Centers buttons horizontally
        }}
    >
        {tripTypes.map((type) => (
            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }} key={type}>
                <ToggleButton
                    value={type}
                    sx={{
                        width: '100%',
                        border: '2px solid transparent',
                        borderRadius: '16px !important',
                        backgroundColor: '#005faf' ,
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: '700',
                        letterSpacing: '.8px',
                        padding: '13px 19px',
                        textTransform: 'uppercase',
                        position: 'relative',
                        
                        animation: 'flash 1.5s infinite', // Flash animation
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: -4,
                            backgroundColor: '#1CB0F6',
                            borderRadius: '16px',
                            borderWidth: '0 0 4px',
                            borderStyle: 'solid',
                            
                            zIndex: -1,
                        },
                        '&:hover:not(:disabled)': {
                            filter: 'brightness(1.1)',
                        },
                        '&:active': {
                            
                            paddingBottom: '10px',
                            '&:after': {
                                borderWidth: '0 0 0px',
                            },
                        },
                        '&:disabled': {
                            
                            cursor: 'auto',
                        },
                    }}
                >
                    {type}
                </ToggleButton>
            </Box>
        ))}
    </ToggleButtonGroup>
</Box>





                );
            case 3:
                return (
<Box display="flex" flexDirection="column" alignItems="center" height="87.38vh" mt={3} padding={3} sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
    <Typography variant="h5" gutterBottom sx={{ color: '#005faf', fontSize: '3rem', paddingTop: '60px' }}>
        What are your interests?
    </Typography>
    <Grid container sx={{ mt: 2, marginTop: '180px' ,display: 'flex', justifyContent: 'center', width: '400px'}}>
        {interestOptions.map((interest) => (
            <Grid item key={interest} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', padding: '0' }}>
                <Chip
                    label={interest}
                    onClick={() => handleInterestToggle(interest)}
                    color={interests.includes(interest) ? 'primary' : 'default'}
                    variant={interests.includes(interest) ? 'filled' : 'outlined'}
                    sx={{ height: '60px', fontSize: '18px', display: 'flex', justifyContent: 'center', padding: '0',
                        
                    }}
                />
            </Grid>
        ))}
    </Grid>
</Box>
                );
            default:
                return null;
        }
    };

    return (
        <Box>
            
            <svg
                id="wave"
                style={{ transition: '0.3s', position: 'absolute', bottom: '0', left: '0', width: '100%', zIndex: 0 }}
                viewBox="0 0 330 330"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
style={{  opacity: 0.2 }}

                    fill="url(#sw-gradient-0)"
                    d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,218.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
            </svg>
            <NavBar />
            <DialogContent sx={{ bgcolor: 'background.default', p: 0 }}>
                {renderStep()}
                <Box height='50vh'>
                <Box mt={-50} display="flex" justifyContent="space-between">
                <Button
    onClick={handleBack}
    disabled={step === 1}
    variant="contained"
    color="primary"
    startIcon={<ArrowBack/>} // Optional: adds an icon for a back arrow
    sx={{
        borderRadius: 2,
        boxShadow: 2,
        padding: '8px 16px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'none',
    }}
>
    Back
</Button>
<Button
    onClick={step < 3 ? handleNext : handleFinish}
    disabled={loading}
    variant="contained"
    color="primary"
    endIcon={<ArrowForward />} // Optional: adds an icon for direction or completion
    sx={{
        borderRadius: 2,
        boxShadow: 2,
        padding: '8px 16px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'none',
    }}
>
    {loading ? <CircularProgress size={24} color="inherit" /> : step < 3 ? 'Next' : 'Finish'}
</Button>
                    {isAuthenticated && step === 3 && (
                        <Button onClick={handleSaveTrip} disabled={loading}>Save Trip</Button>
                    )}
                </Box>
</Box>
            </DialogContent>
            <Footer />
        </Box>
    );
};

export default TripBuilder;
