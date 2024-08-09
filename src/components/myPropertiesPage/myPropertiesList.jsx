import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export const MyPropertiesList = ({ properties, setSelectedProperty }) => {
  return (
    <Box sx={{ 
      height: '100%', 
      bgcolor: '#faf2e6', 
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto',
    }}>
      <Typography variant="h6" gutterBottom>My Properties</Typography>
      <Grid container spacing={2}>
        {properties.map((property) => (
          <Grid item xs={6} key={property.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{property.name}</Typography>
                <Typography variant="body2">{property.description}</Typography>
                <Typography variant="body2">${property.price_per_night}/night</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};