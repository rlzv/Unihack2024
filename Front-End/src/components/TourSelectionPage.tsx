import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import SelectionDialog from '../components/SelectionDialog';

const TourSelectionPage: React.FC = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTourType, setSelectedTourType] = useState<string | null>(null);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSelectionSubmit = (selectedOption: string) => {
        setSelectedTourType(selectedOption);
        console.log(`Selected Tour Type: ${selectedOption}`); // You can replace this with additional actions
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Choose Your Tour Type
            </Typography>
            <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                Select Tour Type
            </Button>

            <SelectionDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                onSubmit={handleSelectionSubmit}
            />

            {selectedTourType && (
                <Typography variant="h6" style={{ marginTop: '2rem' }}>
                    Selected Tour Type: {selectedTourType}
                </Typography>
            )}
        </div>
    );
};

export default TourSelectionPage;
