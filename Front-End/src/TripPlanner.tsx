import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button, Typography } from '@mui/material';

interface TripPlannerProps {
    onClose: () => void;
}

const categories = [
    { id: 1, label: 'Historical Sites' },
    { id: 2, label: 'Parks & Nature' },
    { id: 3, label: 'Restaurants & Cafes' },
    { id: 4, label: 'Museums' },
    { id: 5, label: 'Shopping Centers' },
];

const TripPlanner: React.FC<TripPlannerProps> = ({ onClose }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = event.target;
        setSelectedCategories((prev) =>
            checked ? [...prev, name] : prev.filter((category) => category !== name)
        );
    };

    const handleSubmit = async () => {
        const tripData = { categories: selectedCategories, city: 'Timisoara' };

        try {
            const response = await fetch('/api/trips', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tripData),
            });
            const result = await response.json();
            if (response.ok) {
                onClose();
                window.location.href = `/trip/${result.tripId}`;
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Failed to create trip:', error);
        }
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Choose Categories
            </Typography>
            <FormGroup>
                {categories.map((category) => (
                    <FormControlLabel
                        key={category.id}
                        control={
                            <Checkbox
                                name={category.label}
                                checked={selectedCategories.includes(category.label)}
                                onChange={handleCategoryChange}
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
                disabled={selectedCategories.length === 0}
                style={{ marginTop: '16px' }}
            >
                Generate Trip
            </Button>
        </div>
    );
};

export default TripPlanner;
