import React from 'react';
import { Container, Grid } from '@mui/material';
import TestimonialCard from './Testimonials';
import { testimonialsData } from './TestimonialsData'; // Import the testimonial data

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
