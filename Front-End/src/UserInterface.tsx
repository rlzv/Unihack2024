import React, { useState } from 'react';
import { Container, Grid, Paper, Avatar, Tabs, Tab, TextField, Button, Typography, Box } from '@mui/material';
import { CheckCircle, Edit } from '@mui/icons-material';

const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
              <svg
                id="wave"
                style={{ transition: '0.3s', position: 'absolute', bottom: '0', left: '0', width: '100%', zIndex: 0 }}
                viewBox=" 0 0 510 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
style={{  opacity: 0.2}}

                    fill="url(#sw-gradient-0)"
d="M0,160L40,170.7C80,181,160,203,240,181.3C320,160,400,96,480,101.3C560,107,640,181,720,192C800,203,880,149,960,154.7C1040,160,1120,224,1200,250.7C1280,277,1360,267,1400,261.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                />
            </svg>
      <Paper elevation={3} style={{ padding: '24px', width: '100%' ,zIndex: 1}}>
        <Typography variant="h5" align="center" gutterBottom>
          Account Setting
        </Typography>
        
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="Profile" />
          <Tab label="Vacancies" />
        </Tabs>

        {selectedTab === 0 && (
          <Box mt={3}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Avatar src="https://via.placeholder.com/100" alt="Profile" style={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Button variant="outlined">Change</Button>
              </Grid>
            </Grid>

            <Box mt={3}>
              <TextField
                label="Name"
                defaultValue="Liza Doe"
                fullWidth
                InputProps={{
                  endAdornment: <CheckCircle color="success" />,
                }}
                margin="normal"
              />
              <TextField
                label="Email"
                defaultValue="support@gmail.com"
                fullWidth
                InputProps={{
                  endAdornment: <CheckCircle color="success" />,
                }}
                margin="normal"
              />
              <TextField
                label="Phone"
                defaultValue="+1 234 55 66 777"
                fullWidth
                InputProps={{
                  endAdornment: <CheckCircle color="success" />,
                }}
                margin="normal"
              />
              <TextField
                label="Website"
                fullWidth
                InputProps={{
                  endAdornment: <Edit />,
                }}
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                defaultValue="password"
                fullWidth
                InputProps={{
                  endAdornment: <CheckCircle color="success" />,
                }}
                margin="normal"
              />
              <TextField
                label="Confirm Password"
                type="password"
                defaultValue="password"
                fullWidth
                InputProps={{
                  endAdornment: <CheckCircle color="success" />,
                }}
                margin="normal"
              />
              <Box mt={3} textAlign="center">
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default AccountSettings;
