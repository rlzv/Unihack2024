import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const MatchingTours: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { matchingTours } = location.state || { matchingTours: [] };

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Recommended Tours
            </Typography>
            {matchingTours.length > 0 ? (
                matchingTours.map((tour: any) => (
                    <Card key={tour._id} variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{tour.name}</Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                {tour.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Categories: {tour.categories.join(', ')}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="body1">No matching tours found.</Typography>
            )}
            <Button onClick={() => navigate('/')} variant="contained" sx={{ mt: 3 }}>
                Go Back to Trip Builder
            </Button>
        </Box>
    );
};

export default MatchingTours;
