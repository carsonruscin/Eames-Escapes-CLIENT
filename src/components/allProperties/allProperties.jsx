import { useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, Button, Box, CircularProgress, Container } from '@mui/material'
import { getAllProperties } from '../../services/allPropertiesService.jsx'
import { useNavigate } from 'react-router-dom'

export const AllProperties = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={3} key={property.id}>
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
                    src={property.image}
                    alt={property.name}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, bgcolor: '#faf2e6', display: 'flex', justifyContent: 'space-between' }}>
                  {/* Left Section - Basic Information and Description */}
                  <Box sx={{ flex: 1, pr: 1 }}>
                    <Typography variant="h6" component="div">
                      {property.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      {property.city}, {property.state}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Type: {property.property_type.name}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {property.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Middle Section - Property Details */}
                  <Box sx={{ flex: 1, px: 1, borderLeft: 1, borderRight: 1, borderColor: 'divider' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      ${property.price_per_night}/night
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      Cleaning fee: ${property.cleaning_fee}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      Max guests: {property.max_guests}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      Bedrooms: {property.bedrooms}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      Bathrooms: {property.bathrooms}
                    </Typography>
                  </Box>

                  {/* Right Section - Amenities */}
                  <Box sx={{ flex: 1, pl: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      Amenities:
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {property.amenities.map((amenity) => (
                        <li key={amenity.id}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            {amenity.name}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </CardContent>
                <Button size="small" color="primary" sx={{ backgroundColor: '#faf2e6', '&:hover': {backgroundColor: '#e1d9cf'} }}>
                  Book Now
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}