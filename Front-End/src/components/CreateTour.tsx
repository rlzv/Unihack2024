import React, { useState } from 'react';
import { createTour } from '../api/tourApi';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Chip,
    Box,
    Typography
} from '@mui/material';

const tourCategories = [
    'Historical',
    'Cultural',
    'Food',
    'Nightlife',
    'Adventure',
    'Relaxation'
];

const CreateTour: React.FC = () => {
    const [tour, setTour] = useState({
        name: '',
        description: '',
        categories: [] as string[], // Array to hold selected categories
        destinations: '',
    });
    const [message, setMessage] = useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTour({ ...tour, categories: event.target.value as string[] });
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createTour({
                ...tour,
                destinations: tour.destinations.split(',').map((destination) => ({
                    name: destination.trim(),
                    description: '',
                    location: { coordinates: [0, 0] },
                })),
            });
            setMessage('Tour created successfully');
        } catch (error) {
            setMessage('Error creating tour');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>Create Tour</Typography>
            {message && <Typography color="primary">{message}</Typography>}
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Tour Name"
                    value={tour.name}
                    onChange={handleChange}
                    style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '8px' }}
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={tour.description}
                    onChange={handleChange}
                    style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '8px' }}
                />

                <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
                    Select Categories
                </Button>
                <Box mt={2}>
                    {tour.categories.map((category) => (
                        <Chip key={category} label={category} style={{ marginRight: '8px', marginTop: '8px' }} />
                    ))}
                </Box>

                <input
                    name="destinations"
                    placeholder="Destinations (comma separated)"
                    value={tour.destinations}
                    onChange={handleChange}
                    style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '8px' }}
                />
                <Button type="submit" variant="contained" color="primary">Create Tour</Button>
            </form>

            {/* Dialog for selecting categories */}
            <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
                <DialogTitle>Select Tour Categories</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id="tour-category-select-label">Categories</InputLabel>
                        <Select
                            labelId="tour-category-select-label"
                            multiple
                            value={tour.categories}
                            onChange={handleCategoryChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
                            renderValue={(selected) => (
                                <Box display="flex" flexWrap="wrap">
                                    {(selected as string[]).map((value) => (
                                        <Chip key={value} label={value} style={{ margin: 2 }} />
                                    ))}
                                </Box>
                            )}
                        >
                            {tourCategories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary">Cancel</Button>
                    <Button onClick={handleDialogClose} color="primary">OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CreateTour;
