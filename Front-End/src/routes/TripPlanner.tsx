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
    DialogActions,
    TextField,
} from '@mui/material';
import { StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

interface TripPlannerProps {
    isAuthenticated: boolean;
}

const TripPlanner: React.FC<TripPlannerProps> = ({ isAuthenticated }) => {
    const [step, setStep] = useState(1);
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [tripType, setTripType] = useState<string | null>(null);
    const [interests, setInterests] = useState<string[]>([]);

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

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
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

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            When are you going?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Choose a date range, up to 7 days.
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker orientation="portrait" />
                            <StaticDatePicker // Set orientation to portrait
                                displayStaticWrapperAs="desktop"
                                value={dateRange}
                                onChange={(newValue) => setDateRange(newValue)}
                                renderInput={(props) => <TextField {...props} fullWidth />}
                            />
                        </LocalizationProvider>
                    </Box>
                );
            case 2:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            What kind of trip are you planning?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Select one.
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
                        <Box mt={3}>
                            <Typography variant="body2" gutterBottom>
                                Are you traveling with pets?
                            </Typography>
                            <ToggleButtonGroup exclusive aria-label="pets" sx={{ mt: 1 }}>
                                <ToggleButton value="yes">Yes</ToggleButton>
                                <ToggleButton value="no" selected>
                                    No
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                );
            case 3:
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Typography variant="h5" gutterBottom>
                            Tell us what you’re interested in
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Select all that apply.
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
                    <Button onClick={handleNext} disabled={!isAuthenticated && step === 3}>
                        {step < 3 ? 'Next' : isAuthenticated ? 'Finish' : 'Log in for Full Access'}
                    </Button>
                </Box>
                {!isAuthenticated && step === 3 && (
                    <Typography mt={2} color="textSecondary">
                        Log in to complete your customized trip plan.
                    </Typography>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default TripPlanner;
