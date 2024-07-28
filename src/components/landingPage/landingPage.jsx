import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { API_BASE_URL } from '../../services/apiBaseUrl.jsx';

export const LandingPage = () => {
    const imageUrl = `${API_BASE_URL}/media/landing_page/test-landing-page-image.jpg`;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark gray with 70% opacity
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '16px', color: 'white' }}>Sign In</Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px', input: { color: 'white' }, label: { color: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px', input: { color: 'white' }, label: { color: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </Box>
  );
};
