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
                <CardContent sx={{ flexGrow: 1, bgcolor: '#faf2e6' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {property.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                </CardContent>
                <Button size="small" color="primary" sx={{ backgroundColor: '#faf2e6', '&:hover': {backgroundColor: '#e1d9cf'} }}>
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
