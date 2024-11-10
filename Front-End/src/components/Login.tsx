import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Tabs,
    Tab,
    Alert,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import Select from 'react-select';
import countryList from 'react-select-country-list';

interface AuthPageProps {
    onLoginSuccess: () => void;
    onRegisterSuccess?: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess, onRegisterSuccess }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [country, setCountry] = useState<{ label: string; value: string } | null>(null); // Country selector
    const [knowsTimisoara, setKnowsTimisoara] = useState(false); // Knows Timisoara checkbox
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
        setError(null);
        setSuccess(null);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                const token = data.token;
                localStorage.setItem('token', token);
                onLoginSuccess();
                navigate('/');
            } else {
                setError(data.message || 'Authentication failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login');
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    email,
                    password,
                    country: country?.value, // Send the selected country code
                    knowsTimisoara, // Send if the user knew about Timisoara
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccess('Registration successful! Redirecting to login...');
                onRegisterSuccess?.();
                setTimeout(() => navigate('/'), 2000);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Sign up error:', error);
            setError('An error occurred during registration');
        }
    };

    const countryOptions = countryList().getData(); // Get list of countries for the dropdown

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" sx={{ bgcolor: '#f5f5f5', padding: 3}}>
            <Box width={{ xs: '90%', sm: '400px' }} sx={{bgcolor:'#005faf' ,opacity:'0.9',zIndex:'2'}} padding={4} borderRadius={2} boxShadow={3} >
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab sx={{color:'white'}}label="Login" />
                    <Tab sx={{color:'white'}}label="Sign Up" />
                </Tabs>
                {error && <Alert severity="error" style={{ marginTop: '1rem' }}>{error}</Alert>}
                {success && <Alert severity="success" style={{ marginTop: '1rem' }}>{success}</Alert>}

                {tabIndex === 0 ? (
                    <Box component="form" onSubmit={handleLogin} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h5" sx={{color:'white'}} gutterBottom>Login</Typography>
                        <TextField 
  InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }} label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <TextField InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }} label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <Button 
  type="submit" 
  variant="contained"  
  fullWidth 
  sx={{ 
    marginTop: 2, 
    color: 'white',       // Textul butonului devine alb
    backgroundColor: '#ff6f61',  // Fundalul butonului, poți schimba culoarea aici
    '&:hover': {
      backgroundColor: '#ff6f61', // Fundalul la hover, păstrează aceeași culoare
    }
  }}
>
  Login
</Button>
                    </Box>
                ) : (
                    <Box component="form" onSubmit={handleSignUp} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h5"sx={{color:'white'}} gutterBottom>Sign Up</Typography>
                        <TextField InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}label="First Name" fullWidth margin="normal" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <TextField InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <TextField InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <TextField InputLabelProps={{
    style: { color: '#ff6f61', fontSize:'20px' }, // Set the label color to white
  }}
  sx={{
    backgroundColor: 'white',
    borderRadius: '5px',
  }}label="Confirm Password" type="password" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                        <Typography variant="body1" align="left" sx={{ width: '100%', mt: 2 ,color:'white'}}>Country</Typography>
                        <Select
  options={countryOptions}
  value={country}
  onChange={setCountry}
  placeholder="Select your country"
  isClearable
  styles={{
    control: (provided) => ({
      ...provided,
      width: '100%',
      marginTop: '8px',
      borderColor: 'white', // Schimbă culoarea bordurii
      backgroundColor: 'white', // Schimbă culoarea fundalului
      color: 'white', // Schimbă culoarea textului
    }),
    option: (provided) => ({
      ...provided,
      color: '#ff6f61', // Culoarea textului opțiunilor
      backgroundColor: 'white', // Culoarea de fundal a opțiunilor
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#ff6f61', // Culoarea textului pentru valoarea selectată
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#ff6f61', // Culoarea textului placeholder-ului
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color:  '#ff6f61', // Culoarea indicatorului în funcție de starea de focus sau când meniul este deschis
    }),
  }}
/>


<FormControlLabel
  control={
    <Checkbox
      checked={knowsTimisoara}
      onChange={(e) => setKnowsTimisoara(e.target.checked)}
      sx={{
        color: 'white', 
        '&.Mui-checked': {
          color: 'white', 
        },
      }}
    />
  }
  label="I knew about Timisoara before"
  sx={{ marginTop: 2 ,color:'white'}}
/>


                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 ,backgroundColor: '#ff6f61'}}>Sign Up</Button>
                    </Box>
                )}
            </Box>
            <svg
                id="wave"
                style={{ transition: '0.3s', position: 'absolute', bottom: '0', left: '0', width: '100%', zIndex: 0 }}
                viewBox="0 0 1040 330"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    style={{ transform: 'translate(0, 0px)', opacity: 0.5 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,0L60,38.5C120,77,240,154,360,154C480,154,600,77,720,71.5C840,66,960,132,1080,159.5C1200,187,1320,176,1440,192.5C1560,209,1680,253,1800,269.5C1920,286,2040,275,2160,275C2280,275,2400,286,2520,286C2640,286,2760,275,2880,231C3000,187,3120,110,3240,93.5C3360,77,3480,121,3600,121C3720,121,3840,77,3960,49.5C4080,22,4200,11,4320,22C4440,33,4560,66,4680,71.5C4800,77,4920,55,5040,88C5160,121,5280,209,5400,225.5C5520,242,5640,187,5760,181.5C5880,176,6000,220,6120,225.5C6240,231,6360,198,6480,198C6600,198,6720,231,6840,236.5C6960,242,7080,220,7200,176C7320,132,7440,66,7560,55C7680,44,7800,88,7920,115.5C8040,143,8160,154,8280,165C8400,176,8520,187,8580,192.5L8640,198L8640,330L8580,330C8520,330,8400,330,8280,330C8160,330,8040,330,7920,330C7800,330,7680,330,7560,330C7440,330,7320,330,7200,330C7080,330,6960,330,6840,330C6720,330,6600,330,6480,330C6360,330,6240,330,6120,330C6000,330,5880,330,5760,330C5640,330,5520,330,5400,330C5280,330,5160,330,5040,330C4920,330,4800,330,4680,330C4560,330,4440,330,4320,330C4200,330,4080,330,3960,330C3840,330,3720,330,3600,330C3480,330,3360,330,3240,330C3120,330,3000,330,2880,330C2760,330,2640,330,2520,330C2400,330,2280,330,2160,330C2040,330,1920,330,1800,330C1680,330,1560,330,1440,330C1320,330,1200,330,1080,330C960,330,840,330,720,330C600,330,480,330,360,330C240,330,120,330,60,330L0,330Z"
                />
            </svg>
        </Box>
    );
};

export default AuthPage;