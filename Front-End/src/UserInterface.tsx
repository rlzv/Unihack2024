import React, { useState } from 'react';
import {
  Container, Grid, Paper, Avatar, Tabs, Tab, TextField, Button, Typography,
  Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  IconButton, Card, CardContent
} from '@mui/material';
import { CheckCircle, ArrowBack } from '@mui/icons-material';
interface Tour {
  title: string;
  createdAt: string;
}

const AccountSettings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [displayContent, setDisplayContent] = useState(0); // For delayed content display
  const [isAnimating, setIsAnimating] = useState(false);
  const [openAvatarDialog, setOpenAvatarDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://via.placeholder.com/100");
  const [tours, setTours] = useState<Tour[]>([
    { title: "Tour 1", createdAt: new Date().toLocaleString() },
    { title: "Tour 2", createdAt: new Date().toLocaleString() },
    { title: "Tour 3", createdAt: new Date().toLocaleString() },
  ]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayContent(newValue);
        setIsAnimating(false);
      }, 25); // Adjust to match animation duration
    } else {
      setDisplayContent(newValue);
    }
    setSelectedTab(newValue);
  };

  const handleAvatarClick = () => {
    setOpenAvatarDialog(true);
  };

  const handleAvatarChange = (url: string) => {
    setAvatarUrl(url);
    setOpenAvatarDialog(false);
  };

  const handleDeleteAccount = () => {
    alert("Account deleted!");
  };

  const handleAddTour = () => {
    const newTour: Tour = {
      title: `Tour ${tours.length + 1}`,
      createdAt: new Date().toLocaleString(),
    };
    setTours([...tours, newTour]);
  };

  const handleDeleteTour = (index: number) => {
    setTours(tours.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
                id="wave"
                style={{ transition: '0.3s', position: 'absolute', bottom: '0', left: '0', width: '100%', zIndex: 0 }}
                viewBox=" 0 0 580 320"
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
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', width: '100%' }}>
        <Paper
          elevation={3}
          style={{
            padding: '24px',
            maxWidth: '1200px',
            transition: 'width 0.25s ease',
            width: selectedTab === 1 ? '1200px' : '600px',
            backgroundColor: '#005faf',
            opacity:'0.9'
          }}
        >
          <Box display="flex" alignItems="center" >
            <IconButton>
              <ArrowBack sx={{color:'white'}}/>
            </IconButton>
            <Typography variant="h5" align="center" style={{ flexGrow: 1, color: '#fff', marginRight:'45px',fontSize:'30px'}}>
              Account Settings
            </Typography>
          </Box>

          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTabs-indicator': { display: 'none' }, // Elimină linia de sub tab
              '& .MuiTab-root': { 
                textTransform: 'none', 
                color: '#fff', // Culoarea tab-urilor ne-selectate
              },
              '& .Mui-selected': {
                color: '#ff6f61', // Culoarea tab-ului selectat
              },
            }}
          >
            <Tab label="Profile" sx={{fontSize:'15px'}}/>
            <Tab label="Tours" sx={{fontSize:'15px'}}/>
          </Tabs>

          <Box mt={3}>
            {displayContent === 0 && !isAnimating && (
              <Box>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item>
                    <Avatar src={avatarUrl} alt="Profile" style={{ width: 150, height: 150, cursor: 'pointer' }} onClick={handleAvatarClick} />
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
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

<TextField
  label="Email"
  defaultValue="support@gmail.com"
  fullWidth
  InputProps={{
    endAdornment: <CheckCircle color="success" />,
  }}
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

<TextField
  label="Phone"
  defaultValue="+1 234 55 66 777"
  fullWidth
  InputProps={{
    endAdornment: <CheckCircle color="success" />,
  }}
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

<TextField
  label="Age"
  defaultValue="16.07.2004"
  fullWidth
  InputProps={{
    endAdornment: <CheckCircle color="success" />,
  }}
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

<TextField
  label="Country"
  defaultValue="USA"
  fullWidth
  InputProps={{
    endAdornment: <CheckCircle color="success" />,
  }}
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

<TextField
  label="Password"
  type="password"
  defaultValue="password"
  fullWidth
  InputProps={{
    endAdornment: <CheckCircle color="success" />,
  }}
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'25px' }, // Set the label color to white
  }}
  margin="normal"
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}
/>

                  <Box mt={3} display="flex" justifyContent="center">
                    <Button variant="contained" color="primary" sx={{ marginRight: '8px', padding: '10px 20px', textDecoration: 'none', backgroundColor: '#ff6f61' }}>Save</Button>
                    <Button variant="outlined" color="secondary" sx={{ padding: '10px 20px', textDecoration: 'none', backgroundColor: '#ff6f61',color:'white' }} onClick={() => setOpenDeleteDialog(true)}>Delete Account</Button>
                  </Box>
                </Box>
              </Box>
            )}

            {displayContent === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom sx={{color:'white'}}>Your Tours</Typography>
                <Button variant="contained" color="primary" onClick={handleAddTour} style={{ marginBottom: '16px', backgroundColor: '#ff6f61' }}>Add Tour</Button>
                <Grid container spacing={2} columns={12}>
                  {tours.map((tour, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">{tour.title}</Typography>
                          <Typography color="textSecondary">Created on: {tour.createdAt}</Typography>
                          <Button color="secondary" onClick={() => handleDeleteTour(index)} style={{ marginTop: '8px' }}>Delete Tour</Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </Paper>

        {/* Avatar Dialog */}
        <Dialog open={openAvatarDialog} onClose={() => setOpenAvatarDialog(false)}>
          <DialogTitle>Change Avatar</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the URL for your new avatar.</DialogContentText>
            <TextField autoFocus margin="dense" label="Avatar URL" fullWidth onChange={(e) => handleAvatarChange(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAvatarDialog(false)} color="primary">Cancel</Button>
            <Button onClick={() => handleAvatarChange(avatarUrl)} color="primary">Confirm</Button>
          </DialogActions>
        </Dialog>

        {/* Delete Account Dialog */}
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to delete your account? This action cannot be undone.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeleteDialog(false)} color="primary">Cancel</Button>
            <Button onClick={handleDeleteAccount} color="secondary">Delete</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AccountSettings;
