import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonialsData = [
  {
    avatar: '/path/to/visitor1.jpg',
    name: 'John Doe',
    occupation: 'Travel Blogger',
    testimonial: "Timisoara's rich history and vibrant streets captivated me from the moment I arrived.",
  },
  {
    avatar: '/path/to/visitor2.jpg',
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial: 'The stunning architecture and friendly locals made my photography trip exceptional.',
  },
  {
    avatar: '/path/to/visitor3.jpg',
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial: 'The stunning architecture and friendly locals made my photography trip exceptional.',
  },

];

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
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
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
          name="testimonial-rating"
          value={5}
          readOnly
          precision={0.5}
          icon={<StarIcon fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <TestimonialCard
              avatar={testimonial.avatar}
              name={testimonial.name}
              occupation={testimonial.occupation}
              testimonial={testimonial.testimonial}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsSection;
