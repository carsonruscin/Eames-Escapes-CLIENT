import React from 'react';
import { StickyHeader } from '../stickyHeader/stickyHeader.jsx';
import { NavBar } from '../navBar/navBar.jsx';
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { StickyFooter } from '../stickyFooter/stickyFooter.jsx';

export const AppLayout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const showNavBar = isLoggedIn && location.pathname !== '/';
  const isLandingPage = location.pathname === '/' && !isLoggedIn;

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      overflow: 'hidden',
    }}>
      <StickyHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {showNavBar && <NavBar />}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
      overflow: 'hidden',
          position: 'relative',
        }}
      >
        {children}
      </Box>
      <StickyFooter />
    </Box>
  );
};

