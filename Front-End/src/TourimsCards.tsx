import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';

interface TourismCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

const TourismCard: React.FC<TourismCardProps> = ({ image, title, description}) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TourismCard;
