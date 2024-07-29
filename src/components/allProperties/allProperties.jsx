import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
import { getAllProperties } from '../../services/allPropertiesService.jsx';
import { useNavigate } from 'react-router-dom';

export const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // Check if user is logged in, redirect to landing page if not
    if (!isLoggedIn) {
      navigate('/', { replace: true });
      return;
    }

    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getAllProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError(
          error.message || "Failed to fetch properties. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [navigate]);
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 150px)" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 150px)" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 3, height: 'calc(100vh - 150px)', overflow: 'auto' }}>
      <Grid container spacing={3}>
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <Grid item xs={12} sm={6} md={3} key={property.id || index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box 
                  sx={{ 
                    height: 200, 
                    backgroundColor: 'grey.300', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Image placeholder
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.name || `Property ${index + 1}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description || "No description available"}
                  </Typography>
                </CardContent>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No properties found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
