import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';
const Video: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden',marginTop: '150px', }}>
      {/* YouTube Embed */}
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/Xc8Qx0XFWsA?autoplay=1&mute=1&loop=1&playlist=Xc8Qx0XFWsA&controls=0&start=14"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '109.25%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

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
        <Box sx={{maxWidth: '800px', paddingBottom:'300px'}}>
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
