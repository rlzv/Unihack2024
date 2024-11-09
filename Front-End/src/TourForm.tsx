import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button, Typography, Box } from '@mui/material';

interface TourFormProps {
    onSubmit?: (selectedTours: string[]) => void; // Make onSubmit optional
}

const tourCategories = [
    { id: 1, label: 'Historical Sites' },
    { id: 2, label: 'Parks & Nature' },
    { id: 3, label: 'Restaurants & Cafes' },
    { id: 4, label: 'Museums' },
    { id: 5, label: 'Shopping Centers' },
    { id: 6, label: 'Nightlife' },
    { id: 7, label: 'Art Galleries' },
    { id: 8, label: 'Theaters & Shows' },
];

const TourForm: React.FC<TourFormProps> = ({ onSubmit }) => {
    const [selectedTours, setSelectedTours] = useState<string[]>([]);

    const handleTourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = event.target;
        setSelectedTours((prev) =>
            checked ? [...prev, name] : prev.filter((tour) => tour !== name)
        );
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(selectedTours); // Call onSubmit if it's provided
        } else {
            console.log("Selected tours:", selectedTours); // Default behavior if no onSubmit is provided
        }
    };

    return (
        <Box padding={3} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom>
                Choose Your Tour Preferences
            </Typography>
            <FormGroup>
                {tourCategories.map((category) => (
                    <FormControlLabel
                        key={category.id}
                        control={
                            <Checkbox
                                name={category.label}
                                checked={selectedTours.includes(category.label)}
                                onChange={handleTourChange}
                            />
                        }
                        label={category.label}
                    />
                ))}
            </FormGroup>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={selectedTours.length === 0}
                sx={{ marginTop: 2 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default TourForm;
