import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '100px',
  minWidth: '100vw',
  margin: '0',
  padding: '0',
  position: 'fixed',
  top: 0,
  zIndex: theme.zIndex.drawer + 2,
  backgroundColor: theme.palette.primary.main,
}));

export const StickyHeader = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Set isLoggedIn to false in localStorage
    localStorage.setItem('isLoggedIn', 'false');
    // Update the isLoggedIn state in the parent component
    setIsLoggedIn(false);
    // Navigate to the landing page
    navigate('/');
  };

  return (
    <StyledAppBar>
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Eame's Escapes</Typography>
        {isLoggedIn && (
          <Button 
            onClick={handleLogout} 
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};





