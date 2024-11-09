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
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

interface TripBuilderProps {
    isAuthenticated: boolean;
}

const tripTypes = ['Solo Trip', 'Partner Trip', 'Friends Trip', 'Family Trip'];
const interestOptions = [
    'Must-see Attractions',
    'Great Food',
    'Hidden Gems',
    'Historical Landmarks',
    'Traditional Romanian Cuisine',
    'Art Galleries and Museums',
    'Unique Accommodation',
    'Outdoor Activities',
    'Shopping Streets',
    'Cafes and Coffee Culture',
    'Adventure and Sports',
    'Arts & Theatre',
];

const TripBuilder: React.FC<TripBuilderProps> = ({ isAuthenticated }) => {
    const [step, setStep] = useState(1);
    const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [tripType, setTripType] = useState<string | null>(null);
    const [interests, setInterests] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleFinish = async () => {
        if (!tripType || interests.length === 0) {
            alert("Please select at least one trip type and one interest.");
            return;
        }

        setLoading(true);

        try {
            const params = {
                tripType,
                interests,
            };

            const response = await fetch('http://localhost:5000/api/tours/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params),
            });

            if (response.ok) {
                const matchingTours = await response.json();
                navigate('/matching-tours', { state: { matchingTours } });
            } else {
                console.error('Failed to fetch matching tours');
            }
        } catch (error) {
            console.error('Error fetching matching tours:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveTrip = async () => {
        if (!tripType || interests.length === 0) {
            alert("Please complete your trip details to save.");
            return;
        }

        setLoading(true);

        try {
            const tripData = {
                arrivalDate,
                departureDate,
                tripType,
                interests,
            };

            const response = await fetch('http://localhost:5000/api/trips/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tripData),
            });

            if (response.ok) {
                alert('Trip saved successfully!');
            } else {
                console.error('Failed to save trip');
            }
        } catch (error) {
            console.error('Error saving trip:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTripTypeChange = (event: React.MouseEvent<HTMLElement>, newTripType: string | null) => {
        if (newTripType) setTripType(newTripType);
    };

    const handleInterestToggle = (interest: string) => {
        setInterests((prevInterests) =>
            prevInterests.includes(interest)
                ? prevInterests.filter((item) => item !== interest)
                : [...prevInterests, interest]
        );
    };

    const handleMakeYourOwnTourClick = () => {
        navigate("/create-tour");
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            When are you going?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Select your arrival and departure dates.
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Box mt={2} width="100%" display="flex" justifyContent="space-between" gap={2}>
                                <Box flex={1}>
                                    <Typography variant="subtitle1">Arrival Date</Typography>
                                    <StaticDatePicker
                                        orientation="landscape"
                                        value={arrivalDate}
                                        onChange={(newValue) => setArrivalDate(newValue)}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="subtitle1">Departure Date</Typography>
                                    <StaticDatePicker
                                        orientation="landscape"
                                        value={departureDate}
                                        onChange={(newValue) => setDepartureDate(newValue)}
                                    />
                                </Box>
                            </Box>
                        </LocalizationProvider>
                    </Box>
                );
            case 2:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            What kind of trip are you planning?
                        </Typography>
                        <ToggleButtonGroup
                            value={tripType}
                            exclusive
                            onChange={handleTripTypeChange}
                            aria-label="trip type"
                            sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}
                        >
                            {tripTypes.map((type) => (
                                <ToggleButton key={type} value={type} sx={{ width: '150px' }}>
                                    {type}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Box>
                );
            case 3:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            Tell us what you’re interested in
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" spacing={1} mt={2}>
                            {interestOptions.map((interest) => (
                                <Chip
                                    key={interest}
                                    label={interest}
                                    onClick={() => handleInterestToggle(interest)}
                                    color={interests.includes(interest) ? 'primary' : 'default'}
                                    variant={interests.includes(interest) ? 'filled' : 'outlined'}
                                    sx={{ margin: '4px' }}
                                />
                            ))}
                        </Stack>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Dialog open fullScreen>
            <DialogContent>
                {renderStep()}
                <Box mt={4} display="flex" justifyContent="space-between">
                    <Button onClick={handleBack} disabled={step === 1}>
                        Back
                    </Button>
                    <Button
                        onClick={step < 3 ? handleNext : handleFinish}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : step < 3 ? 'Next' : 'Finish'}
                    </Button>
                    {isAuthenticated && step === 3 && (
                        <Button onClick={handleSaveTrip} disabled={loading}>
                            Save Trip
                        </Button>
                    )}
                    <Button onClick={handleMakeYourOwnTourClick} variant="outlined">
                        Make Your Own Tour
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default TripBuilder;
