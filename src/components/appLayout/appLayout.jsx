import { StickyHeader } from '../stickyHeader/stickyHeader.jsx'
import { NavBar } from '../navBar/navBar.jsx'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { StickyFooter } from '../stickyFooter/stickyFooter.jsx'

export const AppLayout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation()
  const showNavBar = isLoggedIn && location.pathname !== '/'

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <StickyHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {showNavBar && <NavBar />}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          paddingTop: showNavBar ? '150px' : '100px',
          paddingBottom: '64px',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
      <StickyFooter />
    </Box>
  )
}

