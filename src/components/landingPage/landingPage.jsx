import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { API_BASE_URL } from '../../services/apiBaseUrl.jsx';

export const LandingPage = () => {
    const imageUrl = `${API_BASE_URL}/media/landing_page/test-landing-page-image.jpg`;

  return (
    <Box
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
    </Box>
  );
};
