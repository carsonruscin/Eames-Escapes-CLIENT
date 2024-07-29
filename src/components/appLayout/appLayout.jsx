import { StickyHeader } from '../stickyHeader/stickyHeader.jsx';
import { NavBar } from '../navBar/navBar.jsx';
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom';

export const AppLayout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  // Only show NavBar if user is logged in and not on the landing page
  const showNavBar = isLoggedIn && location.pathname !== '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StickyHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {showNavBar && <NavBar />}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          mt: showNavBar ? '150px' : '100px', // Adjust top margin based on NavBar visibility
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

