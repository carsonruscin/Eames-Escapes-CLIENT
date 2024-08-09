import { useState, useEffect } from 'react'
import { Box, Container } from '@mui/material'
import { PropertyForm } from './propertyForm.jsx'
import { MyPropertiesList } from './myPropertiesList.jsx'


export const MyPropertiesPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [properties, setProperties] = useState([])

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, newProperty])
  }

  const handleClearSelectedProperty = () => {
    setSelectedProperty(null)
  };

  return (
    <Box sx={{ 
      height: 'calc(100vh - 150px)',
      flexGrow: 1,
      display: 'flex',
      bgcolor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      paddingBottom: '84px',
    }}>
      <Container maxWidth="xlg" sx={{
        display: 'flex',
        gap: '20px',
      }}>
        <Box sx={{ flex: 1 }}>
          <PropertyForm 
            selectedProperty={selectedProperty} 
            onAddProperty={handleAddProperty}
            onClear={handleClearSelectedProperty}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <MyPropertiesList 
            properties={properties}
            setSelectedProperty={setSelectedProperty}
          />
        </Box>
      </Container>
    </Box>
  );
};
