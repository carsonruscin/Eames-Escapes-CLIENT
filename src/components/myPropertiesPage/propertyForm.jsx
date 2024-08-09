import { useEffect, useState } from 'react'
import { 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Select, 
    MenuItem, 
    FormControl, 
    InputLabel, 
    Input, 
    Grid, 
    Checkbox, 
    ListItemText 
} from '@mui/material'
import { postNewProperty } from '../../services/propertiesService.jsx'
import { getAllAmenities } from '../../services/amenitiesService.jsx'
import { getAllPropertyTypes } from '../../services/propertyTypeService.jsx'


const initialFormData = {
    name: '',
    property_type: '',
    description: '',
    price_per_night: '',
    cleaning_fee: '',
    max_guests: '',
    bedrooms: '',
    bathrooms: '',
    city: '',
    state: '',
    amenities: [],
    image: null,
}

export const PropertyForm = ({ selectedProperty, onAddProperty, onClear }) => {
  const [formData, setFormData] = useState(initialFormData)
  const [imagePreview, setImagePreview] = useState(null)
  const [amenities, setAmenities] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])

  // Fetch property types when the component mounts
  useEffect(() => {
    const getPropertyTypes = async () => {
      const fetchedPropertyTypes = await getAllPropertyTypes()
      setPropertyTypes(fetchedPropertyTypes)
    }

    getPropertyTypes()
  }, [])

  // Fetch amenities when the component mounts
  useEffect(() => {
    const getAmenities = async () => {
        const fetchedAmenities = await getAllAmenities()
        setAmenities(fetchedAmenities)
    }

    getAmenities()
  }, [])

  useEffect(() => {
    if (selectedProperty) {
      setFormData(selectedProperty)
      setImagePreview(selectedProperty.image)
    } else {
      setFormData(initialFormData)
      setImagePreview(null)
    }
  }, [selectedProperty])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      };
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const propertyType = propertyTypes.find(type => type.name === formData.property_type)
    
    // Convert image file to base64 string
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }

    let base64Image = null
    if (formData.image) {
      base64Image = await convertToBase64(formData.image)
    }

    // Map amenities to their respective objects with ids
    const amenitiesWithIds = formData.amenities.map(amenityName => {
      const amenity = amenities.find(a => a.name === amenityName)
      return { id: amenity.id }
    })

    const newPropertyData = {
      ...formData,
      property_type: { id: propertyType.id },
      amenities: amenitiesWithIds,
      image: base64Image,
    };

    const newProperty = await postNewProperty(newPropertyData);
    onAddProperty(newProperty);
    setFormData(initialFormData);
    setImagePreview(null);
  };

  const handleClearForm = () => {
    setFormData(initialFormData);
    setImagePreview(null);
    onClear();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: "100%",
        bgcolor: "#faf2e6",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" gutterBottom align="center">
        {selectedProperty ? "Edit Property" : "Add New Property"}
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <TextField
            margin="dense"
            name="name"
            label="Property Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            fullWidth
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Property Type</InputLabel>
            <Select
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
            >
              {propertyTypes.map((type) => (
                <MenuItem key={type.id} value={type.name}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            name="description"
            label="Short Description"
            multiline
            rows={1}
            value={formData.description}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="max_guests"
            label="Max Guests"
            type="number"
            value={formData.max_guests}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="bedrooms"
            label="Bedrooms"
            type="number"
            value={formData.bedrooms}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="bathrooms"
            label="Bathrooms"
            type="number"
            value={formData.bathrooms}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="price_per_night"
            label="Price per Night"
            type="number"
            value={formData.price_per_night}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="cleaning_fee"
            label="Cleaning Fee"
            type="number"
            value={formData.cleaning_fee}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <FormControl fullWidth margin="normal" sx={{ marginTop: '8px' }}>
            <InputLabel>Amenities</InputLabel>
            <Select
              name="amenities"
              multiple
              value={formData.amenities}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {amenities.map((amenity) => (
                <MenuItem key={amenity.id} value={amenity.name}>
                  <Checkbox checked={formData.amenities.includes(amenity.name)} />
                  <ListItemText primary={amenity.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push the image preview and button to the bottom */}
          <Box
            sx={{
              mt: 2,
              width: '100%',
              height: '322px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#aaa',
            }}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            ) : (
              <Typography variant="body1">Upload an Image</Typography>
            )}
          </Box>
          <Button
            variant="contained"
            component="span"
            onClick={() => document.getElementById("image-upload").click()}
            sx={{ mt: 4, mb: 0.5, height: '56px' }}
          >
            Upload an Image
          </Button>
          <Input
            id="image-upload"
            type="file"
            onChange={handleImageChange}
            sx={{ display: "none" }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, paddingBottom: "10px", gap: 24.5 }}>
        <Button variant="outlined" color="secondary" onClick={handleClearForm} sx={{ height: '56px', width: '200px' }}>
          Clear Selections
        </Button>
        <Button variant="contained" color="primary" type="submit" sx={{ height: '56px', width: '200px' }}>
          Post Property
        </Button>
      </Box>
    </Box>
  );
};
