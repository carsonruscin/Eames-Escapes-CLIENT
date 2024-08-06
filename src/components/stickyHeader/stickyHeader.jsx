import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.svg'


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '100px',
  width: '100%',
  margin: '0',
  padding: '0',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: theme.zIndex.drawer + 2,
  backgroundColor: theme.palette.primary.main,
}))

const StyledLogo = styled('img')({
  height: '180px',
  width: 'auto',
  filter: 'brightness(0) invert(1)',
})

export const StickyHeader = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token')
    // Set isLoggedIn to false in localStorage
    localStorage.setItem('isLoggedIn', 'false')
    // Update the isLoggedIn state in the parent component
    setIsLoggedIn(false)
    // Navigate to the landing page
    navigate('/')
    handleMenuClose()
  }

  return (
    <StyledAppBar>
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          <StyledLogo src={logo} alt="Eame's Escapes" />
          <Typography variant='h5'>Eame's Escapes</Typography>
        </Box>
        {isLoggedIn && (
          <>
            <Button 
              onClick={handleMenuOpen}
              sx={{ 
                color: '#faf2e6',
                fontSize: '14px',
                marginRight: '50px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Dashboard
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#faf2e6',
                }
              }}
            >
              <MenuItem onClick={handleMenuClose}>My Properties</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Bookings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  )
}





