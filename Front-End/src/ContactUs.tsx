import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Container } from '@mui/material';

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (): boolean => {
    let valid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (e.g., send data to API or email)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
          boxShadow: 3,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <TextField
          label="Your Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
        />

        <TextField
          label="Your Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />

        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!formErrors.message}
          helperText={formErrors.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUsForm;
