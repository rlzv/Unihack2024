import React from 'react';
import { Grid, Container } from '@mui/material';
import TourismCard from './TourimsCards';

const attractions = [
  {
    image: '../img/WhatsApp Image 2024-11-08 at 23.01.20_85c25b5b.jpg',
    title: 'Union Square',
    description: 'A beautiful historic square with vibrant architecture and cafes.',
  },
  {
    image: '../img/Canalul_Bega.jpg',
    title: 'Bega Canal',
    description: 'Explore scenic boat rides and riverside promenades.',
  },
  {
    image: '../img/Timisoara-Opera-House-1-1024x585.jpg',
    title: 'Opera House',
    description: 'Experience cultural performances in an iconic building.',
  },
  {
    image: '../img/Parcul_Botanic.jpg',
    title: 'Botanic Park',
    description: 'A serene green space perfect for relaxation and nature walks.',
  },
  {
    image: '../img/Liberty_square.jpg',
    title: 'Liberty Square',
    description: 'A picturesque square with historic buildings and cozy cafes.',
  },
  {
    image: '../img/Biserica_Catolica.jpg',
    title: 'Roman Catholic Cathedral',
    description: 'Marvel at the stunning architecture and interior of this landmark.',
  },
];

const TourismCardsSection: React.FC = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {attractions.map((attraction, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <TourismCard
              image={attraction.image}
              title={attraction.title}
              description={attraction.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TourismCardsSection;
