import { useState, useEffect } from 'react'
import { Box, TextField, Button, Typography, Container } from '@mui/material'
import { API_BASE_URL } from '../../services/apiBaseUrl.jsx'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth.jsx'

export const LandingPage = ({ setIsLoggedIn }) => {
    const imageUrl = `${API_BASE_URL}/media/landing_page/test-landing-page-image-wide.jpg`
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navigate('/all-properties')
        }
    }, [navigate])

    const handleSignIn = async (event) => {
      event.preventDefault()
      const user = { username, password }
      const response = await login(user)
      if (response && response.token) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('isLoggedIn', 'true')
        setIsLoggedIn(true);
        navigate('/all-properties', { replace: true })
      }
    }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: '16px', color: '#faf2e6' }}>Sign In</Typography>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              sx={{
                marginBottom: '16px',
                input: { color: '#faf2e6' },
                label: { color: '#faf2e6' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#faf2e6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#faf2e6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
              InputLabelProps={{
                style: { color: '#faf2e6' },
              }}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: '16px',
                input: { color: '#faf2e6' },
                label: { color: '#faf2e6' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#faf2e6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#faf2e6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
              InputLabelProps={{
                style: { color: '#faf2e6' },
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              sx={{ 
                color: '#faf2e6',
                width: '50%',
                alignSelf: 'center'
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

