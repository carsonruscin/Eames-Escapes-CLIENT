import { useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, Button, Box, CircularProgress, Container } from '@mui/material'
import { getAllProperties } from '../../services/allPropertiesService.jsx'
import { useNavigate } from 'react-router-dom'

export const AllProperties = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Check if user is logged in, redirect to landing page if not
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      navigate('/', { replace: true })
      return
    }
  
    const fetchProperties = async () => {
      setLoading(true)
      const data = await getAllProperties()
      setProperties(data)
      setLoading(false)
    }
  
    fetchProperties()
  }, [navigate])

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ 
      height: 'calc(100vh - 128px)',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#faf2e6',
    }}>
      
      <Container maxWidth="xlg" sx={{
        flexGrow: 1,
        overflowY: 'auto !important',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Grid container spacing={3} sx={{ padding: '15px', marginBottom: '85px', flexGrow: 1, }}>
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <Grid item xs={12} sm={6} md={3} key={property.id || index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      paddingTop: '56.25%', // 16:9 aspect ratio
                      backgroundColor: '#faf2e6',
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={property.imageUrl || 'placeholder-image-url.jpg'}
                      alt={property.name || `Property ${index + 1}`}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, bgcolor: '#faf2e6' }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {property.name || `Property ${index + 1}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {property.description || "No description available"}
                    </Typography>
                  </CardContent>
                  <Button size="small" color="primary" sx={{ backgroundColor: '#faf2e6', '&:hover': {backgroundColor: '#e1d9cf'} }}>
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
      </Container>
    </Box>
  )
}
