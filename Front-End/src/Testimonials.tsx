import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  occupation: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, occupation, testimonial }) => {
  return (
    <Card 
      raised
      sx={{
        '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar alt={name} src={avatar} sx={{ width: 56, height: 56 }} />
          <Typography variant="h6" mt={1}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">{occupation}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {testimonial}
        </Typography>
        <Rating
          name={`testimonial-rating`}
          value={5}
          readOnly
          precision={0.5}
          icon={<StarIcon fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
