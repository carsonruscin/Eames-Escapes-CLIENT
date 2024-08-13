import { Tabs, Tab, Box } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'


export const NavBar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (_, newValue) => {
    navigate(newValue)
  }

  // Determine the value for the Tabs component
  const tabValue = ['/all-properties', '/luxury-estates', '/ranches', '/cottages'].includes(location.pathname)
    ? location.pathname
    : false

  return (
    <Box sx={{ width: '100%', 
               bgcolor: 'rgba(0, 0, 0, 0.7)',
               display: 'flex', 
               justifyContent: 'center',
               position: 'fixed',
               top: '100px',
               left: 0,
               zIndex: 1000,
               height: '50px'
    }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        sx={{
          '& .MuiTab-root': { 
            color: 'white',
            '&.Mui-selected': {
              color: 'primary.main',
            },
            '&:focus': {
              outline: 'none',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <Tab label="All Properties" value="/all-properties" />
        <Tab label="Luxury Estates" value="/luxury-estates" />
        <Tab label="Ranches" value="/ranches" />
        <Tab label="Cottages" value="/cottages" />
      </Tabs>
    </Box>
  )
}
