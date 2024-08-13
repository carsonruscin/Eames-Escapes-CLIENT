import { useState, useEffect } from 'react'
import { Box, Container } from '@mui/material'
import { PropertyForm } from './propertyForm.jsx'
import { MyPropertiesList } from './myPropertiesList.jsx'
import { deleteProperty, getPropertiesByOwner } from '../../services/propertiesService.jsx'


export const MyPropertiesPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [properties, setProperties] = useState([])

  // Fetch properties by owner (belonging to current logged in user) when component mounts
  useEffect(() => {
    const fetchPropertiesByOwner = async () => {
      const fetchedProperties = await getPropertiesByOwner()
      setProperties(fetchedProperties)
    }

    fetchPropertiesByOwner()
  }, [])

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperties) => {
      const propertyIndex = prevProperties.findIndex(property => property.id === newProperty.id)
      if (propertyIndex !== -1) {
        // Update existing property
        const updatedProperties = [...prevProperties]
        updatedProperties[propertyIndex] = newProperty
        return updatedProperties
      } else {
        // Add new property
        return [...prevProperties, newProperty]
      }
    })
  }

  const handleClearSelectedProperty = () => {
    setSelectedProperty(null)
  }

  const handleDelete = async (propertyId) => {
    await deleteProperty(propertyId)
    setProperties((prevProperties) => prevProperties.filter(property => property.id !== propertyId))
  }

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
            onDeleteProperty={handleDelete}
          />
        </Box>
      </Container>
    </Box>
  )
}
