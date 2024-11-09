import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';

const Video: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', marginTop: '150px' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '109.25%',
          objectFit: 'cover',
          zIndex: -1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <source src="../img/🇷🇴 Timisoara_ The Little Vienna of Eastern Europe in 4K.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Full Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '109.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with opacity
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
          textAlign: 'center',
          color: 'white',
          padding: 4,
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        {/* Centered Announcement and Content */}
        <Box sx={{ maxWidth: '800px', paddingBottom: '300px', margin: '300px' }}>
          <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Raleway' }}>
            Timișoara: European Capital of Culture 2023
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontFamily: 'Raleway' }}>
            Step into the heart of Timișoara—a city where history meets innovation, and every street tells a story.
            Known for its vibrant arts, breathtaking architecture, and warm hospitality, Timișoara invites you to
            experience a celebration of culture like no other.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Video;
