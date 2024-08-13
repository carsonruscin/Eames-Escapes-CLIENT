import { Box, Typography, Card, CardContent, Grid, CardActions, Button } from '@mui/material'


export const MyPropertiesList = ({ properties, setSelectedProperty, onDeleteProperty }) => {

  return (
    <Box sx={{ 
      height: '100%', 
      bgcolor: '#faf2e6', 
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto',
    }}>
      <Typography variant="h6" gutterBottom align='center'>My Properties</Typography>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {properties.map((property) => (
          <Grid item xs={6} key={property.id} sx={{ display: 'flex' }}>
            <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
              <CardActions sx={{ padding: '0' }}>
              <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Button 
                      fullWidth
                      size="small" 
                      color="primary" 
                      onClick={() => setSelectedProperty(property)}
                      sx={{ justifyContent: 'center', backgroundColor: '#faf2e6', '&:hover': {backgroundColor: '#e1d9cf'} }}
                    >
                      Edit Listing
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button 
                      fullWidth
                      size="small" 
                      color="secondary"
                      onClick={() => onDeleteProperty(property.id)}
                      sx={{ justifyContent: 'center', backgroundColor: '#faf2e6', '&:hover': {backgroundColor: '#e1d9cf'} }}
                    >
                      Delete Listing
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* Spacer element to add padding at the bottom */}
        <Grid item xs={12} sx={{ height: '20px' }} />
      </Grid>
    </Box>
  )
}