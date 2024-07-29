import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ width: '100%', 
               bgcolor: 'rgba(0, 0, 0, 0.7)', 
               display: 'flex', 
               justifyContent: 'center',
               padding: '8px 0'
    }}>
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        centered
        sx={{
            '& .MuiTab-root': { 
              color: 'white',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
          }}
      >
        <Tab label="All Properties" value="/all-properties" />
        <Tab label="Luxury Estates" value="/luxury-estates" />
        <Tab label="Ranches" value="/ranches" />
        <Tab label="Cottages" value="/cottages" />
      </Tabs>
    </Box>
  );
};